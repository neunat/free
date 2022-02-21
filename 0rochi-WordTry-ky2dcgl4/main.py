
import tkinter


root = tkinter.Tk()
root.title("Untitled")
root.geometry("400x240")


sample_text = tkinter.Text( root, height = 10)
sample_text.pack()

Font_tuple = ("Arial", 10)
sample_text.configure(font = Font_tuple)
root.mainloop()

