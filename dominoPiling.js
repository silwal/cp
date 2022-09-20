//https://codeforces.com/problemset/problem/50/A

var board = readline();
board = board.trim().split(/\s+/);
var boardArea = +board[0] * +board[1];
print(Math.floor(boardArea/2,0));
