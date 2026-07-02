
/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
*/


function isValidSudoku(board) {
   // create 9 trackers for rows, 9 for columns, 9 for boxes
   let rows=[];
   let cols =[];
   let boxes =[];

   for (let i = 0; i< 9 ; i++){
    rows.push(new Set());
    cols.push(new Set());
    boxes.push(new Set());
   }

   // walk through every cell in the 9* 9 grid, once
   for( let r = 0; r < 9; r++){
      for( let c = 0 ; c < 9; c++){
        let celValue = board[r][c]

        // skip empty cells
        if(celValue === '.'){
            continue;
            }
            // find out which box this cell belong to
            let boxIndex = Math.floor(r/3)* 3 + Math.floor(c/3);

            // check for duplicates in the row
            if(rows[r].has(celValue)){
                return false;
            }
            if(cols[c].has(celValue)){
                return false;
            }
            if(boxes[boxIndex].has(celValue)){
                return false;
            }
            // no duplicate found- record this celvalue
            rows[r].add(celValue);
            cols[c].add(celValue);
            boxes[boxIndex].add(celValue);
      }
   }
   return true;
};
console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])) // true