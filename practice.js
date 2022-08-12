// Javascript - {}
// Topic - Build a Data Structure
// problem - Exercise implement a Linked List Data Structure

// 10-->5-->16


// Structure Tip
// const linkedList = {
//    head: {
//       value: 10,
//       next: {
//          value: 5,
//          next: {
//             value: 16,
//             next: null
//          }
//       }
//    }
// }
// console.log(linkedList);

class LinkedList {
   constructor(value) {
      this.head = {
         value: value,
         next: null
      }
      this.tail = this.head;
      this.length = 1;
   }

   append(value) {
      this.tail.next = {
         value: value,
         next: null
      }
      this.tail = this.tail.next;
      this.length++;
      return this;
   }

   
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.print();

console.log(myLinkedList);