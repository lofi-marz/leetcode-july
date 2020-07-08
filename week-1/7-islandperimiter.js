/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

	let perimiter = 0;
	let height = grid.length;
	let width = grid[0].length; //Reectangular so we can assume constant width
	let x = 0, y=0;
	let foundStart = false;
	let discoveredIsland = [];
	for (y = 0; y < height; y++) {
		for (x = 0; x < width; x++) {
			if (grid[y][x] == 1) {
				foundStart = true;
				break;
			}
		}
		if (foundStart) break;
	}
	discoveredIsland = [[y,x]];
	let found = false;
	console.log(discoveredIsland);
	do {
		let cell = discoveredIsland.pop();
		let y = cell[0];
		let x = cell[1];
		console.log(discoveredIsland);
		found = false;
		if (y < 0 && grid[y-1][x] == 1 && !discoveredIsland.includes([y-1,x])) {  
			discoveredIsland.push([y-1,x]);
			found = true;
		} //Up
		if (y < height-1 && grid[y+1][x] == 1 && !discoveredIsland.includes([y+1,x])) {  
			
			discoveredIsland.push([y+1,x]);
			found = true;
		} //Down
		if (x > 0 && grid[y][x-1] == 1 && !discoveredIsland.includes([y,x-1])) {  
			discoveredIsland.push([y,x-1]);
			found = true;
		} //
		if (x < width-1 && grid[y][x+1] == 1 && !discoveredIsland.includes([y,x+1])) {  
			discoveredIsland.push([y,x+1]);
			found = true;
		} //
	} while (found);
	return perimiter;
};


let square = [
			[0,1,0,0],
			[1,1,1,0],
			[0,1,0,0],
			[1,1,0,0]];

let small = [[1,1]];

console.time();

console.log(islandPerimeter(square));
console.timeEnd();
