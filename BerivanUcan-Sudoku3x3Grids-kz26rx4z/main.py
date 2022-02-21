import random as rp

def find_cell(guess):
  row, col = 9, 9

  sudoku = [[rp.randint(1,9) for x in range(row)] for y in range(col)]

  print(sudoku)
  
def find_guess(guess,sudoku):

  cell_count = 0

  for i in range(0,9,3):
    row, col = i,i
    row_start = (row // 3) * 3
    col_start = (col // 3) * 3
   
    for r in range(row_start, row_start + 3):
      cell_count += 1
      for c in range(col_start, col_start + 3):
        if sudoku[r][c] == guess:
          
          print(r,c)

def find_square_cell(sudoku, r,c):
  grid = [[x for x in range(3)] for y in range(3)]
  for i in range(0,9,3):
    row, col = i,i
    row_start = (row // 3) * 3
    col_start = (col // 3) * 3
    for i in range(row_start, row_start + 3):
      for j in range(col_start, col_start +3):
        if row_start == r and col_start == c:
          grid.append(sudoku[i][j])    
          print(grid)
          print("debug")
  
if __name__ == '__main__':
  find_cell(1)
  sudoku = [[rp.randint(1,9) for x in range(9)] for y in range(9)]
  find_guess(6,sudoku)
  find_square_cell(sudoku, 1,2)
