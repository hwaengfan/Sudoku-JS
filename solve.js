let grid = [
	[7, 8, 0, 4, 0, 0, 1, 2, 0],
	[6, 0, 0, 0, 7, 5, 0, 0, 9],
	[0, 0, 0, 6, 0, 1, 0, 7, 8],
	[0, 0, 7, 0, 4, 0, 2, 6, 0],
	[0, 0, 1, 0, 5, 0, 9, 3, 0],
	[9, 0, 4, 0, 6, 0, 0, 0, 5],
	[0, 7, 0, 3, 0, 0, 0, 1, 2],
	[1, 2, 0, 0, 0, 7, 4, 0, 0],
	[0, 4, 9, 2, 0, 6, 0, 0, 7],
];

//check if possible
function checkPossible(grid, x_of_num, y_of_num, num) {
	//check hozirontally
	for (y = 0; y < 9; y++) {
		if (grid[x_of_num][y] == num) {
			return false;
		}
	}

	//check vertically
	for (x = 0; x < 9; x++) {
		if (grid[x_of_num][y] == num) {
			return false;
		}
	}

	//check 3x3 subgrid
	x = Math.floor(x_of_num / 3) * 3;
	y = Math.floor(y_of_num / 3) * 3;
	for (a = 0; a < 3; a++) {
		for (b = 0; b < 3; b++) {
			if (grid[x + a][y + b] == num) {
				return false;
			}
		}
	}
	return true;
}

//solve
function solve(grid) {
	for (let x = 0; x < 9; x++) {
		for (let y = 0; y < 9; y++) {
			if (grid[x][y] == 0) {
				for (let num = 1; num < 10; num++) {
					if (checkPossible(grid, x, y, num)) {
						grid[x][y] = num.toString();
						//recursion
						if (solve(grid)) {
							return true;
						} else {
							grid[x][y] = 0;
						}
					}
				}
				return false;
			} else {
				grid[x][y] = grid[x][y].toString();
			}
		}
	}
	return true;
}

function printGrid(grid) {
	for (let x = 0; x < 9; x++) {
		if (x % 3 == 0 && x != 0) {
			console.log('- - - - - - - - - - -');
		}

		for (let y = 0; y < 9; y++) {
			if (y % 3 == 0 && y != 0) {
				solution += '|' + ' ';
			}
			solution += grid[x][y] + ' ';
		}
		console.log(solution);
		solution = '';
	}
}

let solution = '';
solve(grid);
printGrid(grid);
console.log(solution);
