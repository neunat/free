import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
  <input id={props.value} type="text" maxLength ="1"className="square"></input> 
    
  );
}

function Row(props) {
  //props.value = parseInt(props.value);
  var value = parseInt(props.value);
  return (
    <div className="board-row">
           {
        (() => {
          let container = [];
          let arr = [...Array(9).keys()]
          arr.forEach((val, index) => {
            container.push(
             <Square value={parseInt(props.value)+index} onClick={props.onClick}/>
             )
          });
          return container;
        })()
      }
      </div>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  getGrid() {
    var grid = [];
    for(var i=0;i<81;i++) {
      if(i%9==0) grid.push([])
        var cell = document.getElementById(i);
        grid[grid.length-1].push(cell.value==''?'.':cell.value)
    }
    return grid;
  }

    
   solveIt(e) {
    const valid = (board, row, col, val, i) => (board[row][i] == val || board[i][col] == val || board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] == val);
    const tryVal = (board, row, col, val) => [...Array(9).keys()].every(i => !valid(board, row, col, val, i));
    
    function solve(data) {
        for (let i = 0; i < 9; i++)
            for (let j = 0; j < 9; j++) {
                if (!isNaN(data[i][j])) continue;
    
                for (let val = 1; val <= 9; val++) {
                    if (!tryVal(data, i, j, val)) continue;
    
                    data[i][j] = `${val}`;
    
                    if (solve(data)) return true;
                    else data[i][j] = '.';
                }
                return false;
            }
        return true;
    }
    
    solve(e);
    return e
  }

    import() {
      var grid  = eval(prompt("Enter board"));
      console.log(grid)
     this.setGrid(grid);
    }

    setGrid(grid) {
      for (let i = 0; i < 81; i++) {
         
          var cell = document.getElementById(i);
          cell.value = grid.flat()[i];
        
        
      }
    }

    export() {
      var grid = this.getGrid();
      var arr = [];
      for (let i = 0; i < 9; i++) {
          arr.push([]);
          for (let s = 0; s < 9; s++) {
              var val = grid[i][s];
              arr[i].push(`"${val == "" ? "." : val}"`)
          }
      }
     return (`[${arr.map((e)=>`[${e.join(",")}]`).join(",\n")}]`)
    }

  render() {
    return (
      <div>
        <h1>Sudoku Solver</h1>
                   {
        (() => {
          let container = [];
          let arr = [...Array(9).keys()]
          arr.forEach((val, index) => {
            container.push(
             <Row value={index*9}/>
             )
          });
          return container;
        })()
      }
        <button onClick={()=>this.setGrid(this.solveIt(this.getGrid()))}>Solve</button>
        <button onClick={()=>this.import()}>Import</button>
        <button onClick={()=>document.write(this.export())}>Export</button>
      </div>
           

    );
  }
}

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
