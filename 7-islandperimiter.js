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
			if (grid[y][x] != 1)  continue;
			if (y == 0 || grid[y-1][x] == 0) { perimiter++; } //Up
			if (x == 0 || grid[y][x-1] == 0) {  perimiter++; } //Right
			if (y ==  height-1 || grid[y+1][x] == 0) {  perimiter++; } //Below
			if (x == width-1 || grid[y][x+1] == 0) {  perimiter++; } //Left
		}
	}
	return perimiter;

};

let square = [[0,1,0,0],
[1,1,1,0],
[0,1,0,0],
[1,1,0,0]];

let small = [[1,1]];

console.time();
console.log(islandPerimeter(small));
console.timeEnd();
