class Node {
   constructor (value) {
      this.value = value;
      this.next = null;
   }
}

class Queue {
   constructor(value) {
      this.first = value ? new Node(value) : null;
      this.last = this.first;
      this.length = value ? 1 : 0;
   }
   enqueue(value){
      this.length++;
      // check param
      if (!value) return "invalid param"
      if (!this.first){
         this.first = new Node(value);
         this.last = this.first;
         return;
      }

      let newNode = new Node(value);
      let temp = this.last;
      this.last = newNode;
      temp.next = this.last;
   }
   dequeue(){
      // code here
      let temp = this.first;
      this.first = this.first.next;
      return temp;
   }
   peek(){
      return this.first;
   }
}

const myQueue = new Queue()
myQueue.enqueue(5);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(20);

myQueue.print();
const result = myQueue.dequeue();
console.log(result)
myQueue.print();
console.log(myQueue)
