class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

//  [A, B,D,E, C,F]

// root node -> A -> LEFT ->  [B,D,E]
//                   RIGHT -> [C,F]

// const depthFirstValues = (root) => {
//     const result = []
//     const stack = [root]
//     while (stack.length > 0) {
//         const current = stack.pop()
//         result.push(current.val)

//         if (current.right) stack.push(current.right)
//         if (current.left) stack.push(current.left)
//     }

//     return result
// }

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");

/* 
         A
       /  \
      B    C
     / \   /
    D   E  F
     
     /  
*/

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
depthFirstValues(A);
