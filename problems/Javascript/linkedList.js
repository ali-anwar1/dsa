/**
 *  Linked Lists
 * A Linked List is, as the word implies, a list where the nodes are linked together. Each node contains data and a pointer. The way they are linked together is that each node points to where in the memory the next node is placed.
 * 1. Traversal
 * 2. Remove a node
 * 3. Insert a node
 * 4. Sort
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/** A linked list consists of nodes with some sort of data, and a pointer, or link, to the next node. */

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        let node = new Node(value);
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



function findLowestValue(head) {
    let minValue = head.data;
    let currentNode = head.next;

    while (currentNode) {
        if (currentNode.data < minValue) {
            minValue = currentNode.data;
        }
        currentNode = currentNode.next;
    }

    return minValue;
}

function deleteSpecificNode(head, nodeToDelete) {
    if (head === nodeToDelete) {
        return head.next;
    }

    let currentNode = head;

    while (currentNode.next && currentNode.next !== nodeToDelete) {
        currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
        return head; // Node not found
    }

    currentNode.next = currentNode.next.next;

    return head;
}


// Create nodes
const node1 = new Node(7);
const node2 = new Node(11);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(9);
const node6 = new Node(8);
const node7 = new Node(12);
const node8 = new Node(13);
const node9 = new Node(1);
const node10 = new Node(19);

// Link nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;



// Usage
traverseAndPrint(node1);
console.log(findLowestValue(node1));

const node11 = deleteSpecificNode(node1, node10)
traverseAndPrint(node11);

/**
 * A doubly linked list has nodes with addresses to both the previous and the next node, like in the image below, and therefore takes up more memory. But doubly linked lists are good if you want to be able to move both up and down in the list.
 */

class DoubleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;  // First node
        this.tail = null;  // Last node
        this.length = 0;
    }

    // Add at end (push)
    push(value) {
        const newNode = new DoubleNode(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // Remove from end (pop)
    pop() {
        if (this.length === 0) return undefined;

        const removedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }

        this.length--;
        return removedNode;
    }

    // Add at beginning (unshift)
    unshift(value) {
        const newNode = new DoubleNode(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    // Remove from beginning (shift)
    shift() {
        if (this.length === 0) return undefined;

        const removedNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }

        this.length--;
        return removedNode;
    }

    // Get node at index
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current;
        if (index < this.length / 2) {
            // search from head
            current = this.head;
            for (let i = 0; i < index; i++) current = current.next;
        } else {
            // search from tail
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) current = current.prev;
        }

        return current;
    }

    // Set value at index
    set(index, value) {
        const node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    // Insert at index
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        const newNode = new DoubleNode(value);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;

        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    // Remove at index
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const removedNode = this.get(index);

        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }
}


const dll = new DoublyLinkedList();

dll.push(10);
dll.push(20);
dll.push(30);

dll.unshift(5); // add at start
dll.print(); // [5, 10, 20, 30]

dll.pop(); // removes 30
dll.shift(); // removes 5

dll.insert(1, 99);
dll.print(); // [10, 99, 20]

dll.remove(1);
dll.print(); // [10, 20]

console.log("Node at index 1:", dll.get(1)); // 20