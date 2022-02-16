function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/* 
      5
     / \
   1    6
        /
      4
*/

/* console.log(root);
console.log([root]); */

/* 
    2
   /  \
  1    3
*/

const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));

function dfs(root) {
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    console.log(current.val);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
}

console.log(dfs(root));

/* var isValidBST = function (root, lower = -Infinity, upper = Infinity) {
  if (root === null) return true;

  const stack = [{ node: root, minimum: -Infinity, maximum: Infinity }];

  while (stack.length) {
    const { node, minimum, maximum } = stack.pop();
    if (node.val <= minimum || node.val >= maximum) return false;

    if (node.left !== null) {
      stack.push({ node: node.left, minimum, maximum: node.val });
    }

    if (node.right !== null) {
      stack.push({ node: node.right, minimum: node.val, maximum });
    }
  }

  return true;
}; */

// const root = new TreeNode(2, new TreeNode(1), new TreeNode(0));

// console.log(isValidBST(root));
// console.log(root);
