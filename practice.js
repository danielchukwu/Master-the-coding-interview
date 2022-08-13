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

   
}

const myll = new LinkedList(10);
myll.append(5);
myll.append(16);
myll.prepend(1);
myll.printList();

console.log(myll);