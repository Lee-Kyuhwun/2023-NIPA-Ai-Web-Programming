const readline = require("readline");
let board = Array(30)
  .fill()
  .map(() => Array(30).fill(-1));
let currentPlayer = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printBoard() {
  for (let i = 0; i < 30; i++) {
    let row = "";
    for (let j = 0; j < 30; j++) {
      if (board[i][j] === -1) {
        row += " -";
      } else {
        row += " " + board[i][j];
      }
    }
    console.log(row);
  }
}

function placeStone(x, y) {
  if (board[x][y] !== -1) {
    console.log("You cannot place a stone there.");
    return false;
  }
  board[x][y] = currentPlayer;
  currentPlayer = 1 - currentPlayer; // Switch between 0 and 1
  return true;
}

function checkWin(x, y, player) {
  const directions = [
    [
      [-1, 0],
      [1, 0],
    ], // horizontal
    [
      [0, -1],
      [0, 1],
    ], // vertical
    [
      [-1, -1],
      [1, 1],
    ], // diagonal /
    [
      [-1, 1],
      [1, -1],
    ], // diagonal \
  ];

  for (let direction of directions) {
    let count = 1; // The stone just placed

    // Check both sides for each direction
    for (let side of direction) {
      let [dx, dy] = side;

      let i = x + dx,
        j = y + dy;
      while (i >= 0 && i < 30 && j >= 0 && j < 30 && board[i][j] === player) {
        count++;
        i += dx;
        j += dy;
      }
    }

    if (count >= 5) {
      return true;
    }
  }

  return false;
}

function play() {
  printBoard();

  rl.question("Enter the coordinate (for example, 15,15): ", (answer) => {
    const [x, y] = answer.split(",").map(Number);

    if (placeStone(x, y)) {
      if (checkWin(x, y, board[x][y])) {
        printBoard();
        console.log(`Game over. Player ${board[x][y]} wins.`);
        rl.close();
        return;
      }
    }

    play();
  });
}

play();
