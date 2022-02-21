class Cursor:
    def print(code):
        """printing syntax for executing an ansi code"""
        print("\033" + code, end="", flush=True)

    def move(x, y):
        """Moves x columns and y rows from current position"""
        Cursor.print(f"[{abs(y)}{'B' if y > 0 else 'A'}")
        Cursor.print(f"[{abs(x)}{'C' if x > 0 else 'D'}")

    def set_position(x, y): 
        """Moves the cursor to the specified row (y) and column (x)"""
        Cursor.print(f"[{y};{x}H")

    def save(): 
        """Saves the current cursor position"""
        Cursor.print("[s")
    
    def restore():
        """Restores the most recently saved cursor position"""
        Cursor.print("[u")

    def clear_screen(full=True):
        """Clears the console after the cursor position, or the entire screen if 'full' is True."""
        Cursor.print(f"[{2 if full else ''}J")

    def clear_line(full=True):
        """Clears the current line after the cursor position, or the entire line if 'full' is True."""
        Cursor.print(f"[{2 if full else ''}K")
    
    def showCursor(visible):
        Cursor.print(f"[?25{'h' if visible else 'l'}")



from getkey import getkey, keys
from colored import fg, attr

class OptionList:
    class Option:
        def __init__(self, emoji, text, action, enabled=True):
            self.emoji = emoji
            self.text = text
            self.action = action
            self.enabled = enabled
    
    def __init__(self, options: [Option], starting_index = 0, default_indent=2, selected_indent=1, default_formatting=fg(248), selected_formatting=''):
        self.options = options
        self.default_indent = default_indent
        self.selected_indent = selected_indent
        self.default_formatting = default_formatting
        self.selected_formatting = selected_formatting
        self.selected = starting_index
    
    def display(self):
        for i, option in enumerate(self.options):
            indent = self.selected_indent if i == self.selected else self.default_indent
            formatting = self.selected_formatting if i == self.selected else self.default_formatting
            print(" " * indent + option.emoji, formatting + option.text + attr('reset') + ("" if i==self.selected else ""))
        
    def get_input(self):
        Cursor.save()
        while True:
            Cursor.restore()
            Cursor.clear_screen(full=False)
            self.display()
            while True:
                key = getkey()
                if key in (keys.UP, keys.LEFT, keys.W, keys.A):
                    self.selected = (self.selected - 1) % len(self.options)
                elif key in (keys.DOWN, keys.RIGHT, keys.S, keys.D):
                    self.selected = (self.selected + 1) % len(self.options)
                elif key in (keys.ENTER, keys.SPACE):
                    return self.select()
                else: continue
                break

    def select(self):
        action = self.options[self.selected].action
        action[0](*action[1], **action[2])



def format_time(duration, hours=False, minutes=True, miliseconds=False):
    hrs = int(duration // 60**2)
    mins = int(duration % 60**2 // 60)
    secs = int(duration % 60)
    milis = round(duration - int(duration), (2 if miliseconds else None))
    return (f"{hrs:0>2}:" if hours else '') + (f"{mins:0>2}" if minutes else '') + f":{secs:0>2}" + (f"{milis:0<4}"[1:] if miliseconds else '')