// Javascript - {}
// Topic - Coding Interview Problem
// Problem: Problem: Implement Queue Using Stacks
// Description: Implement the following operations of a queue using stacks 
// - push(x) -- push element x to the back of queue 
// - pop() -- removes the element from in front of queue 
// - peek() -- get the front element
// - empty() -- return whether the queue is empty




// QUEUE

class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Queue {
   constructor(value=null){
      this.first = [];
      this.last = [];
   }
   peek(){
      return this.first[0];
   }
   enqueue(value){
      // check
      let length = this.first.length;
      for (let i=0; i<length; i++) {
         const element = this.first.pop();
         this.last.push(element);
      }
      this.last.push(value);
      return this.last;
   }
   dequeue(){
      // check
      let length = this.last.length;
      for (let i=0; i<length; i++) {
         const element = this.last.pop();
         this.first.push(element);
      }
      this.first.pop();
      return this.first;
   }
   isEmpty(){
      return this.first.length === 0 || this.last.length === 0 ? true : false;
   }
   printQueue(){
   }
}

const myQueue = new Queue();
console.log(myQueue);

myQueue.enqueue('google');
myQueue.enqueue('udemy');
myQueue.enqueue('discord');
myQueue.enqueue('youtube');

myQueue.dequeue();
// myQueue.dequeue();
// // myQueue.dequeue();
// // myQueue.dequeue();

// myQueue.enqueue('ebay')
// myQueue.enqueue('amazon')
// myQueue.enqueue('alibaba')

myQueue.printQueue();
console.log(myQueue);
