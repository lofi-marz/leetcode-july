/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
	let xor = x^y;
	let dist = 0;
	/*for (let i = 0; i < xor.length; i++) {
		if (xor[i] == 1) {
			dist++;
		}
	}*/
	while (xor) {
		xor &= (xor-1);
		dist++;
	}
  return dist; 
};


console.log(hammingDistance(1,4));