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

   prepend(value) {
      this.head = {
         value: value,
         next: this.head
      };
      this.length++;
      return this;
   }

   

   print() {
      let node = this.head;
      const array = [];
      while(node.next){
         array.push(node.value);  // add current node value
         array.push(" --> ");  
         node = node.next;  // set node to next node
      }
      // console.log(array);
      console.log(array.join(''));
   }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.print();

console.log(myLinkedList);