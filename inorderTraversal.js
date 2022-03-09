function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const head = new TreeNode(1, new TreeNode(2), new TreeNode(3));

/* 
        1
       / \
      2   3

      Expected output = [2,1,3]
*/

// Inorder traversal visit left -> root -> right
// Understanding
function inorderTraversal(root) {
  if (root === null) return [];
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
}

console.log(inorderTraversal(head));

// pop -> removes ele which is at thwe last index
// also it return the popped
// Recursive approach
var inorderTraversal = function (root) {
  if (root === null) return [];
  let leftVal = inorderTraversal(root.left);
  let rightVal = inorderTraversal(root.right);
  return [...leftVal, root.val, ...rightVal];
};
// preOrder -> root -> left -> right
var preOrderTraversal = function (root) {
  if (root === null) return [];
  let leftVal = preOrderTraversal(root.left);
  let rightVal = preOrderTraversal(root.right);
  return [root.val, ...leftVal, ...rightVal];
};

// post -> left -> right -> root
var postOrderTraversal = function (root) {
  if (root === null) return [];
  let leftVal = postOrderTraversal(root.left);
  let rightVal = postOrderTraversal(root.right);
  return [...leftVal, ...rightVal, root.val];
};

// Can we modify the same recursive approach for preOrder, and postOrder as well?
