/**
 * Binary Search Trees (BSTs):
 * A type of Binary Tree where for each node, the left child node has a lower value, and the right child node has a higher value.
 */

// Define a simple Binary Tree Node
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Sample tree:
//        1
//       / \
//      2   3
//     / \
//    4   5

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// ---------------- DFS Traversals ----------------

// Inorder Traversal: Left -> Root -> Right
function inorder(root) {
    if (!root) return;
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

// Preorder Traversal: Root -> Left -> Right
function preorder(root) {
    if (!root) return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

// Postorder Traversal: Left -> Right -> Root
function postorder(root) {
    if (!root) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}

// Iterative DFS using Stack (Preorder)
function dfsIterative(root) {
    if (!root) return;
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        console.log(node.val);

        // Push right first so left is processed first
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
}

// ---------------- Test the traversals ----------------
console.log("Inorder Traversal:");
inorder(root); // Output: 4 2 5 1 3

console.log("\nPreorder Traversal:");
preorder(root); // Output: 1 2 4 5 3

console.log("\nPostorder Traversal:");
postorder(root); // Output: 4 5 2 3 1

console.log("\nIterative DFS Traversal:");
dfsIterative(root); // Output: 1 2 4 5 3