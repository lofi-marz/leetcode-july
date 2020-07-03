/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
	cells = evolve(cells);
	N--;
	N = N %14;

    for (let i = 0; i < N; i++) {
		cells = evolve(cells);
	}
	return cells;
};

function evolve(cells) {
	let newcells = [0];
	for (let j = 1; j < 7; j++) {
			
		newcells[j] =  (cells[j-1] == cells[j+1]) ? 1 : 0;
	}
	newcells.push(0);
	return newcells;
}



let cells = [1,0,0,1,0,0,0,1];

//let N = 30;
let N =  826;
let correct = prisonAfterNDays(cells, N);
console.log(correct);


