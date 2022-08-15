// Javascript - {}
// Topic - Build a Data Structure
// Problem: Build a Queue Data Structure with the following methods
// - peek
// - enqueue 
// - dequeue
// - isEmpty (optional)

class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Queue {
   constructor(value=null){
      this.first = value ? new Node(value) : null;
      this.last = this.first;
      this.length = value ? 1 : 0;
   }
   peek(){
      return this.first;
   }
   enqueue(value){
      // check
      if (!this.last){
         this.first = new Node(value);
         this.last = this.first;
         this.length++;

         return this;
      }

      const newNode = new Node(value);
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
      return this;
   }
   dequeue(){
      // check
      if (this.first === this.last){
         this.first = null;
         this.last = this.first;
         this.length --;
         return this;
      }

      const nextFirst = this.first.next;
      this.first = nextFirst;
      this.length--;
      return this;
   }
   isEmpty(){
      return !this.first ? true : false;
   }
   printQueue(){
      let array = [];
      let cur = this.first;

      while (cur){
         array.push(cur.value);
         cur = cur.next;
      }
      
      array = array.join(' <-- ');
      console.log(array, `| Length: ${this.length}`);
      return this;
   }
}

const myQueue = new Queue();
console.log(myQueue);

myQueue.enqueue('google');
myQueue.enqueue('udemy');
myQueue.enqueue('discord');
myQueue.enqueue('youtube');

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

myQueue.enqueue('ebay')
myQueue.enqueue('amazon')
myQueue.enqueue('alibaba')

myQueue.printQueue();
console.log(myQueue);
