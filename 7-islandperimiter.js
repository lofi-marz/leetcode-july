/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
	let perimiter = 0;
	let height = grid.length;
	let width = grid[0].length; //Reectangular so we can assume constant width
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			if (y == 0 || !grid[y-1,x]) perimiter++; //Up
			if (x == 0 || !grid[y,x-1]) perimiter++; //Right
			if (y ==  height-1 || !grid[y+1,x]) perimiter++; //Up
			if (x == width-1 || !grid[y,x+1]) perimiter++; //Right
		}
	}
	return perimiter;
};

let input = [[0,1,0,0],
[1,1,1,0],
[0,1,0,0],
[1,1,0,0]];

console.log(islandPerimeter(input));
