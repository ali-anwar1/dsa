

/**
 * Stack
 * A stack is a data structure that can hold many elements, and the last element added is the first one to be removed.
 * Basic operations we can do on a stack are:
 * 1. Push: Adds a new element on the stack.
 * 2. Pop: Removes and returns the top element from the stack.
 * 3. Peek: Returns the top (last) element on the stack.
 * 4. isEmpty: Checks if the stack is empty.
 * 5. Size: Finds the number of elements in the stack.
 */
let stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack[stack.length - 1]); // peek → 1

/*** Implementation of Stack using Linked List */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.size += 1;
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        const poppedNode = this.head;
        this.head = this.head.next;
        this.size -= 1;
        return poppedNode.value;
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.head.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    stackSize() {
        return this.size;
    }

    traverseAndPrint() {
        let currentNode = this.head;
        let output = "";
        while (currentNode) {
            output += currentNode.value + " -> ";
            currentNode = currentNode.next;
        }
        console.log(output.slice(0, -4)); // Remove last arrow
    }
}

// Usage
const myStack = new Stack();
myStack.push('A');
myStack.push('B');
myStack.push('C');

console.log("LinkedList: ");
myStack.traverseAndPrint();
console.log("Peek: ", myStack.peek());
console.log("Pop: ", myStack.pop());
console.log("LinkedList after Pop: ");
myStack.traverseAndPrint();
console.log("isEmpty: ", myStack.isEmpty());
console.log("Size: ", myStack.stackSize());

/**
 * Queue
 * Basic operations we can do on a queue are:
 * 1. Enqueue: Adds a new element to the queue.
 * 2. Dequeue: Removes and returns the first (front) element from the queue.
 * 3. Peek: Returns the first element in the queue.
 * 4. isEmpty: Checks if the queue is empty.
 * 5. Size: Finds the number of elements in the queue.
 */


let queue = [];
queue.push(1); // enqueue
queue.push(2);
console.log(queue.shift()); // dequeue → 1

/** Custom implementation of Queue */
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue.shift(); // removes the first element
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}

// Usage
const myQueue = new Queue();

myQueue.enqueue('A');
myQueue.enqueue('B');
myQueue.enqueue('C');

console.log("Queue: ", myQueue.queue);
console.log("Peek: ", myQueue.peek());
console.log("Dequeue: ", myQueue.dequeue());
console.log("Queue after Dequeue: ", myQueue.queue);
console.log("isEmpty: ", myQueue.isEmpty());
console.log("Size: ", myQueue.size());



/**
 *  Linked Lists
 * A Linked List is, as the word implies, a list where the nodes are linked together. Each node contains data and a pointer. The way they are linked together is that each node points to where in the memory the next node is placed.
 */

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        let node = new ListNode(value);
        if (!this.head) this.head = node;
        else {
            let current = this.head;
            while (current.next) current = current.next;
            current.next = node;
        }
    }
}



function traverseAndPrint(head) {
    let currentNode = head;
    let output = "";
    while (currentNode) {
        output += currentNode.data + " -> ";
        currentNode = currentNode.next;
    }
    output += "null";
    console.log(output);
}

// Create nodes
const node1 = new ListNode(7);
const node2 = new ListNode(11);
const node3 = new ListNode(3);
const node4 = new ListNode(2);
const node5 = new ListNode(9);












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

/** AVL Trees
 * Self-balancing BST (difference of left & right heights ≤ 1).
 * Maintain BST efficiency for dynamic data.
 * Rotations to keep tree balanced during insert/delete.
 */


/**
 * Nodes (vertices) + connections (edges).
 * Directed / Undirected
 * Weighted / Unweighted
 */


/**
 * Linear Search
 */


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}


/**
 * Binary Search
 */

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}