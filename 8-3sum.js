/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   //Aim is to get to zero
   //So a solution for a number is if it has a twosum to its negative
   let results = [];
   nums = nums.sort((a,b) => a-b);
   console.log(nums);
   for (let i = 0; i < nums.length; i++) {
	   if (i != 0 && nums[i] == nums[i-1]) continue;
	   let j = i+1;
	   let k = nums.length-1;
	   while (j < k) {
		   if (nums[i] + nums[j] + nums[k] == 0) {
			   	results.push([nums[i], nums[j], nums[k]]);
				j++;
				while (j < k && nums[j] == nums[j-1]) {
					j++;
				}

			} else if (nums[i] + nums[j] + nums[k] < 0) {
				j++;
			} else {
				k--;
			}
		}
	}
	
   return results;
   
};

function twoSum(nums, target) {
	//let numsLessThanTarget = nums.filter(x => x <= target); //Was going to use this but we can have negatives so doesn't work
	let diffs = {}; //Stores how far away each number is to the goal
	for (let i = 0; i < nums.length; i++) {
		if (!diffs[target - nums[i]]) diffs[target - nums[i]] = [];
		diffs[target - nums[i]].push(i);
	}
	console.log(target);
	console.log(diffs);
	for (let i = 0; i < nums.length; i++) {
		if (diffs[nums[i]]) return [i, diffs[nums[i]]]; 
	}
	return false;
}

//let nums = [-1, 0, 1, 2, -1, -4];
let nums = [-1, 0, 1, 2, -1, -4];
let target = 0;
let result = threeSum(nums);
console.log(result);
//console.log(twoSum(nums, 2));
/*for (const [key, value] of Object.entries(result)) {
	console.log(key);
	console.log(value);
	console.log("");
}*/

//console.log(threeSum(nums));