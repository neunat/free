tokens = ['PLUS', 'MINUS', 'TIMES', 'SLASH', 'POW', 'EQUAL', 'SQRT']
var_env = []
tokenized_str = []
input_str = None
semi_tkn_str = None

def lexer(inp_str):
  return_str = inp_str.replace('+', tokens[0]).replace('-', tokens[1]).replace('=', 'EQUAL')..replace('*', 'TIMES')
  return return_str

while True:
  x = input('-->')
  print(lexer(x));



