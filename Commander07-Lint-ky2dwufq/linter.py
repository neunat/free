import enchant
import string
LINE = "\u001b[31;1m~\u001b[0m"
END = "\u001b[31;1m^\u001b[0m"
WARNING = "\u001b[43mWARNING\u001b[0m "
ERROR = "\u001b[41mERROR\u001b[0m "
LINE_TERMINATORS = [".", "!", "?"]
hide_warns = False
def print_error(text, file, line, col, err):
  src = f"File '{file}', line {line}."
  print("--------------------\n"+ERROR+src+"\n"+text+"\n"+LINE*col+END+"\n"+err)
def print_warn(text, file, line, col, err):
  if not hide_warns:
    src = f"File '{file}', line {line}."
    print("--------------------\n"+WARNING+src+"\n"+text+"\n"+LINE*col+END+"\n"+err)
def check(text, src):
  total = 0
  line = 1
  for wi in range(0, len(text)):
    word = text[wi]
    total += len(word)
    if word == "i":
      print_warn(' '.join(text).split("\n")[line-1], src, line, total, "Standalone 'i' not uppercase consider making it.")
    if wi == len(text)-1:
      if not any(lt in word for lt in LINE_TERMINATORS):
        print_error(' '.join(text).split("\n")[line-1], src, line, total+wi, f"Missing line terminator! Expected: {LINE_TERMINATORS} but found '{word[-1]}'.")
    if not enchant.Dict("en_US").check(word.strip(string.punctuation)):
      print_warn(' '.join(text).split("\n")[line-1], src, line, total-len(word)+wi, f"Word is misspelt! Did you mean '{enchant.Dict('en_US').suggest(word.strip(string.punctuation))[0]}'")
    if len(text) > 1 and text[wi-1][-1] in string.punctuation and text[wi-1][-1] and word[0] != word[0].upper():
      print_error(' '.join(text).split("\n")[line-1], src, line, total-len(word)+wi, "Expected uppercase got lowercase!")
    if word[0] != word[0].upper() and (wi == 0 or text[wi-1][-1] == "\n"):
      print_error(' '.join(text).split("\n")[line-1], src, line, total-len(word), "Initial character not uppercase!")
    if "\n" in word:
      line += 1
      total = 0