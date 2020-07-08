/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	let carry = false;
	let i = digits.length-1;
	do {
		
		if (digits[i] == 9) {
			digits[i] = 0;
			carry = true;
		} else {
			digits[i]++;
            carry = false;
		}
		i--;
	} while (carry && i >= 0)
	if (carry) {
		digits.unshift(1);
	}
    return digits;
};
let arr = [9,9,9,9];
console.log(plusOne(arr));