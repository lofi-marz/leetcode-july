
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrderBottom = function(root) {
	let level = [root];
	let nextlevel = [];
	let levels = [];
	if (!root) return [];
	do {
		nextlevel = [];
	
		for (let i = 0; i < level.length; i++) {
			if (level[i].left) nextlevel.push(level[i].left);
			if (level[i].right) nextlevel.push(level[i].right);
		}
		levels.unshift(level.map(x=>x.val));
		level = nextlevel;
	} while (level.length > 0);
	return levels;
};



let nums = [3,9,20,null,null,15,7];
let root = new TreeNode(nums[0], null, null);
makeTree(root, nums, 0);
console.log(levelOrderBottom(root));

function traverseTree(root, level) {
	console.log(level + ": " + root.val);
	if (root.left) traverseTree(root.left,level+1);
	if (root.right) traverseTree(root.right,level+1);
}








function badLevelOrderBottom(root) {
    if (!root) return [];
	return Object.values(treetodict(root, {}, 0)).reverse();
};


function treetodict(root, dict, level) {
	dict.push([level,root.val]);
	if (root.left) dict.concat(dict,treetodict(root.left,dict,level+1));
	if (root.right) dict.concat(dict, treetodict(root.right,dict,level+1));
	return dict;	
}

function makeTree(root, arr, i) {
    
    if (i >= arr.length) return;
    if (arr[i] == null) return;
    let lefti = 2*i+1;
    let righti = 2*i+2;
    if (lefti < arr.length && arr[lefti]) {
        root.left = new TreeNode(arr[lefti], null, null);
        makeTree(root.left, arr, lefti);
    }
    if (righti < arr.length && arr[righti]) {
        root.right = new TreeNode(arr[righti], null, null);
        makeTree(root.right, arr, righti);
    }
    
}


/*
    3
   / \
  9  20
    /  \
   15   7
	3 is root 9,20,null,null,15,7
	9 is left of 3	20,null,null,15,7
	20 is right of 3 
	null is left of 9
	null is right of 9
	15 is left of 20
	7 is right of 20
*/
