/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	let words = / +/;
	let reversed = s.split(words).filter(x => x != "").reverse().join(" ");
	console.log(reversed);
	return reversed;
};

reverseWords("  hello world!  ");