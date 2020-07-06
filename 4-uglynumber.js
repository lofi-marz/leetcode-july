/**
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function(n) {
	let two = 0;
	let three = 0;
	let five = 0;
	let next = 0;
	let res = [1];
	n -= 1;
	while (n--) {
		next = Math.min(res[two] * 2, res[three] * 3, res[five] * 5);
		if(next == res[two] * 2){
			two++;
		}
		if(next == res[three] * 3){
			three++;
		}
		if(next == res[five] * 5){
			five++;
		}
		res.push(next);
	}
	
	return res.pop();
};



 


console.log(nthUglyNumber(10));