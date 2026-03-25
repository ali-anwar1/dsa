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


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(element) {
        const newNode = new Node(element);

        if (this.rear === null) {
            this.front = this.rear = newNode;
            this.length++;
            return;
        }

        this.rear.next = newNode;
        this.rear = newNode;
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        const temp = this.front;
        this.front = temp.next;
        this.length--;

        if (this.front === null) {
            this.rear = null;
        }

        return temp.data;
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.front.data;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    printQueue() {
        let temp = this.front;
        let output = "";
        while (temp) {
            output += temp.data + " -> ";
            temp = temp.next;
        }
        console.log(output);
    }
}

// Usage
const myQueueLinkedList = new LinkedListQueue();

myQueueLinkedList.enqueue('A');
myQueueLinkedList.enqueue('B');
myQueueLinkedList.enqueue('C');

// Write without adding new line
process.stdout.write("Queue: ");
myQueueLinkedList.printQueue();

console.log("Peek: ", myQueueLinkedList.peek());
console.log("Dequeue: ", myQueueLinkedList.dequeue());

// Write without adding new line
process.stdout.write("Queue after Dequeue: ");
myQueueLinkedList.printQueue();

console.log("isEmpty: ", myQueueLinkedList.isEmpty());
console.log("Size: ", myQueueLinkedList.size());