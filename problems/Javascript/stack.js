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
class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }
}

// Usage
const myStack = new Stack();

myStack.push('A');
myStack.push('B');
myStack.push('C');

console.log("Stack: ", myStack.stack);
console.log("Pop: ", myStack.pop());
console.log("Stack after Pop: ", myStack.stack);
console.log("Peek: ", myStack.peek());
console.log("isEmpty: ", myStack.isEmpty());
console.log("Size: ", myStack.size());


/*** Implementation with Linked List */

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class StackLinkedList {
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
            return 'Stack is empty';
        }

        const poppedNode = this.head;
        this.head = this.head.next;
        this.size -= 1
        return poppedNode.value;
    }

    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }

        return this.head.value;
    }

    isEmpty() {
        return this.size === 0
    }

    stackSize() {
        return this.size;
    }

    traverseAndPrint() {
        let currentNode = this.head;
        let output = "";

        while (currentNode) {
            output += currentNode.value + ' -> ';
            currentNode = currentNode.next;
        }

        console.log(output.slice(0, -4));

    }

}


const myStackLinkedList = new StackLinkedList();
myStackLinkedList.push('A');
myStackLinkedList.push('B');
myStackLinkedList.push('C');
myStackLinkedList.push('D');
console.log("Stack Linked List: ");
myStackLinkedList.traverseAndPrint();
console.log("Peek: ", myStackLinkedList.peek());
console.log("Pop: ", myStackLinkedList.pop());
console.log("Stack Linked List after Pop: ");
myStackLinkedList.traverseAndPrint();
console.log("isEmpty: ", myStackLinkedList.isEmpty());
console.log("Size: ", myStackLinkedList.stackSize());