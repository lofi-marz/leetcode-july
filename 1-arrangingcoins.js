/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
	let k = 0;
	while (n >= k)
	{
		n -= k++
	}
	k--;
	return k;
	
};

var arrangeCoinsBetter = function(n) {
	return Math.floor((Math.sqrt(8*n+1)+1)/2)-1
	return (Math.sqrt(8*n+1)/2)
}

let testNums = [1,2,3,4,5,6,7,8,9,10];
testNums.forEach(n => console.log(`${n} | ${arrangeCoins(n)} | ${arrangeCoinsBetter(n)}`))
