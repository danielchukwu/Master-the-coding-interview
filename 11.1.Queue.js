class Node1 {
   constructor (value) {
      this.value = value;
      this.next = null;
   }
}

export class Queue {
   constructor(value) {
      this.first = value ? new Node1(value) : null;
      this.last = this.first;
      this.length = value ? 1 : 0;
   }
   enqueue(value){
      this.length++;
      // check param
      if (!value) return "invalid param"
      if (!this.first){
         this.first = new Node1(value);
         this.last = this.first;
         return;
      }

      // add node1
      let newNode1 = new Node1(value);
      let temp = this.last;
      this.last = newNode1;
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
   print(){
      let cur = this.first;
      let structure = '';

      while (cur){
         // iterate true entire linked list
         structure += `${cur.value} -> `;
         cur = cur.next
      }
      console.log(structure +'null')
   }
}

// export {Queue};