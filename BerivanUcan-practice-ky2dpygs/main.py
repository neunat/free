def find_empty_cell(sudoku):

  for r in range(9):
    for c in range(9):
      if sudoku[r][c] == -1:
        return r,c
  return None, None

def is_valid(sudoku, guess, row, col):

  row_vals = sudoku[row]
  if guess in row_vals:
    return 0,0

  #col_vals = []
  #for i in range(9):
  #  col_vals.append(sudoku[i][col])
  col_vals = [sudoku[i][col] for i in range(9)]
  if guess in col_vals:
    return 0,0

  row_start = (row // 3) * 3
  col_start = (col // 3) * 3

  for r in range(row_start, row_start + 3):
    for c in range(col_start, col_start + 3):
      if sudoku[r][c] == guess:
        return row_start, col_start
        

  return True

def solve_sudoku(sudoku):

  row, col = find_empty_cell(sudoku)

  if row is None:
    return True

  for guess in range(1,10):
    if is_valid(sudoku, guess, row, col):
      sudoku[row][col] = guess
      if solve_sudoku(sudoku): # recursion
        return True

    sudoku[row][col] = -1 # backtracking
  
  return False
def print_3x3(sudoku, row, col):

    for i in row:
      for j in col:
        print(j)



if __name__ == '__main__':
    example_board = [
        [3, 9, -1,   -1, 5, -1,   -1, -1, -1],
        [-1, -1, -1,   2, -1, -1,   -1, -1, 5],
        [-1, -1, -1,   7, 1, 9,   -1, 8, -1],

        [-1, 5, -1,   -1, 6, 8,   -1, -1, -1],
        [2, -1, 6,   -1, -1, 3,   -1, -1, -1],
        [-1, -1, -1,   -1, -1, -1,   -1, -1, 4],

        [5, -1, -1,   -1, -1, -1,   -1, -1, -1],
        [6, 7, -1,   1, -1, 5,   -1, 4, -1],
        [1, -1, 9,   -1, -1, -1,   2, -1, -1]
    ]
    print(solve_sudoku(example_board))
    print(example_board)
    print_3x3(example_board, is_valid(example_board,5,8,8))
