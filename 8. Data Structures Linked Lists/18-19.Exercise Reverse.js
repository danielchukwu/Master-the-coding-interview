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
      this.next = null
   }
}

class LinkedList {
   constructor(value){
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
   }
   append(value){
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;

      return this;
   }
   
   prepend(value){
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;

      return this.head;
   }

   printList(){
      let currentNode = this.head;
      let arrayList = [];
      while (currentNode){
         arrayList.push(currentNode.value, " --> ");
         currentNode = currentNode.next;
      }
      arrayList = arrayList.join('') + "null";
      console.log(arrayList);

      return this;
   }

   reverse(){
      let first  = this.head;
      let second = first.next;
      let third = second.next;
      while(second){
         second.next = first;
         first = second;
         second = third;
         third = second ? second.next : null;
      }
      this.head.next =null;

      this.tail = this.head;
      this.head = first;

      this.printList();
      return this;
   }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

myLinkedList.printList();

myLinkedList.reverse();

console.log(myLinkedList);