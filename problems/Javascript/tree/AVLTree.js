/**
 * The AVL Tree is a type of Binary Search Tree named after two Soviet inventors Georgy Adelson-Velsky and Evgenii Landis who invented the AVL Tree in 1962.

AVL trees are self-balancing, which means that the tree height is kept to a minimum so that a very fast runtime is guaranteed for searching, inserting and deleting nodes, with time complexity O(log n).

A type of Binary Search Tree that self-balances so that for every node, the difference in height between the left and right subtrees is at most one. This balance is maintained through rotations when nodes are inserted or deleted.

Each of these data structures are described in detail on the next pages, including animations and how to implement them.
 */


class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

function getHeight(node) {
    return node ? node.height : 0;
}

function getBalance(node) {
    return node ? getHeight(node.left) - getHeight(node.right) : 0;
}

function rightRotate(y) {
    console.log('Rotate right on node', y.data);
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
    x.height = 1 + Math.max(getHeight(x.left), getHeight(x.right));

    return x;
}

function leftRotate(x) {
    console.log('Rotate left on node', x.data);
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = 1 + Math.max(getHeight(x.left), getHeight(x.right));
    y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));

    return y;
}

function insert(node, data) {
    if (!node) return new TreeNode(data);

    if (data < node.data) {
        node.left = insert(node.left, data);
    } else if (data > node.data) {
        node.right = insert(node.right, data);
    }

    node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
    const balance = getBalance(node);

    // Left Left
    if (balance > 1 && data < node.left.data) return rightRotate(node);

    // Left Right
    if (balance > 1 && data > node.left.data) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }

    // Right Right
    if (balance < -1 && data > node.right.data) return leftRotate(node);

    // Right Left
    if (balance < -1 && data < node.right.data) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }

    return node;
}

function inOrderTraversal(node) {
    if (!node) return;
    inOrderTraversal(node.left);
    process.stdout.write(node.data + ", ");
    inOrderTraversal(node.right);
}

// Usage
let root = null;
const letters = ['C', 'B', 'E', 'A', 'D', 'H', 'G', 'F'];
for (const letter of letters) {
    root = insert(root, letter);
}

inOrderTraversal(root); // Output in sorted order