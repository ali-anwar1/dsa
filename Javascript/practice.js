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

    enqueue(value){
        this.queue.push(value)
    }

    dequeue(){
        const dequeuedValue = this.queue.shift();
        return dequeuedValue;
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.queue[0]
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    size(){
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



class Stack {
    constructor(){
        this.stack = [];
    }

    push(val){
        this.stack.push(val)
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
     return this.stack.pop(); 
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }
    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }
}


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


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}