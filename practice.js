// Javascript - {}
// Topic - Build a Data Structure
// Problem: Given a linkedlist, how would you go about reversing the list. write a method to do this
// Example 1:

// Input:  [1, 10, 16, 18]
// Output: [18, 16, 10, 1]

// constraint : use a singly linked list


// SOLUTION 1
// what i can do is to create a reverse method and then initialize a list that would take the elements in reverse order and then

class Node {
   constructor(value){
      this.value = value,
      this.next = null,
      this.prev = null
   }
}

class DoublyLinkedList {
   constructor(value) {
      this.head = new Node(value)
      this.tail = this.head;
      this.length = 1;
   }

   // [10, 5, 16]
   reverse1(){
      // check params
      
      let counter = this.length-1;
      let currentNode = this.head;
      const arrayList = [];

      while (counter >= 0 ){
         arrayList[counter] = currentNode ? currentNode.value : null;
         currentNode = currentNode ? currentNode.next : null ;
         counter--;
      }

      console.log(arrayList);
      return arrayList;
   }

   append(value) {
      const newNode = new Node(value)
      this.tail.next = newNode;
      newNode.prev = this.tail;
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
         nodeArray.push(currentNode.value, " <--> ");
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
      } else if (index === 0){
         this.prepend(value);
         return;
      }
      
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index-1);
      const leadersNext = leader.next;
      newNode.next = leadersNext;

      newNode.prev = leader;
      leader.next = newNode;

      this.length++;
      return this;
   }

   remove(index){
      if (index === 0){
         this.head = this.head.next;
         this.head.prev = null;
         return this;
      } else if (index >= this.length){
         this.tail = this.tail.prev;
         this.tail.next = null;
         return this;
      }
      const leader = this.traverseToIndex(index-1);
      leader.next = leader.next.next;

      this.length--;
      return this;
   }
}

const mydll = new DoublyLinkedList(10);
mydll.append(5);
mydll.append(16);
mydll.printList();
mydll.prepend(1);
mydll.printList();
mydll.insert(23, 0);
mydll.insert(2, 6);
mydll.printList();
mydll.remove(2)
mydll.printList();
mydll.remove(0);
mydll.printList();

mydll.reverse1();