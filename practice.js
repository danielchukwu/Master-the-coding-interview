// Javascript - {}
// Topic - Build a Data Structure
// problem - Exercise implement a Linked List Data Structure

// 10-->5-->16

class Node {
   constructor(value){
      this.value = value,
      this.next = null
   }
}

class LinkedList {
   constructor(value) {
      this.head = new Node(value)
      this.tail = this.head;
      this.length = 1;
   }
   
   append(value) {
      const newNode = new Node(value)
      this.tail.next = newNode;
      this.tail = newNode;

      this.length++;
      return this;
   }

   prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;

      this.length++;
      return this;
   }

   printList() {
      let nodeArray = [];
      let currentNode = this.head;

      while(currentNode !== null){
         nodeArray.push(currentNode.value, " --> ");
         currentNode = currentNode.next;
      }
      nodeArray = nodeArray.join('') + null;
      console.log(nodeArray)
      return nodeArray;
   }

   traverseToIndex(index) {
      // check params
      if (index >= this.length) return this.tail;
      if (index <= 0) return this.head;

      let counter = 0;
      let node = this.head;

      while (counter !== index) {
         node = node.next;
         counter++;
      }

      console.log(node.value);
      return node;
   }

   insert(value, index){
      // check params
      if (index >= this.length){
         this.append(value);
         return;
      };
      if (index === 0){
         this.prepend(value);
         return;
      }
      
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index-1);
      const leadersNext = leader.next;
      newNode.next = leadersNext;
      leader.next = newNode;

      this.length++;
      return this;
   }

   remove(index){
      const leader = this.traverseToIndex(index-1);
      leader.next = leader.next.next;

      this.length--;
      return this;
   }
}

const myll = new LinkedList(10);
myll.append(5);
myll.append(16);
myll.printList();
myll.prepend(1);
myll.printList();
myll.insert(23, 0);
myll.insert(2, 6);
myll.printList();
myll.remove(2)
myll.printList();

console.log(myll);