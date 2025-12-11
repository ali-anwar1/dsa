/**
 * Binary Tree
 * Each node has up to two children, the left child node and the right child node. This structure is the foundation for more complex tree types like Binay Search Trees and AVL Trees.
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}


class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Insert example
function insert(node, value) {
    if (!node) return new BinaryTreeNode(value);
    if (value < node.value) node.left = insert(node.left, value);
    else node.right = insert(node.right, value);
    return node;
}