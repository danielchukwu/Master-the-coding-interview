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
      // check param
      if (!value) return "invalid param"
      if (!this.first){
         this.first = new Node(value);
         return;
      }

      let newNode = new Node(value);
      let temp = this.last;
      this.last = newNode;
      temp.next = this.last;
   }
   dequeue(value){
      // code here
   }
   peek(){
      return this.first;
   }
}