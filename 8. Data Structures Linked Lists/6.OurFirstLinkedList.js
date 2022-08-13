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

   print() {
      let node = this.head;
      const array = [];
      while(node !== null){
         array.push(node.value," --> ");  // add current node value
         node = node.next;  // set node to next node
      }
      // console.log(array);
      console.log(array.join(''));
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

   insert(value, nodePosValueToInsert){
      let [node, prevNode] = this._find(nodePosValueToInsert);
      node.next = {
         value: value,
         next: node.next
      };
      this.length++;
      return this;
   }

   delete(value) {
      let [node, prevNode] = this._find(value)
      if (prevNode) prevNode.next = node.next;
   }

   search(value) {
      return this._find(value)[0];
   }

   _find(nodeValue){
      let node = this.head;
      let prevNode = null;
      while(node.next){
         if (node.value === nodeValue){
            return [node, prevNode];
         }
         prevNode = node
         node = node.next;
      }
      return [null, prevNode];
   }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(12);    // append O(1)

myLinkedList.prepend(1);    // prepend O(1)
myLinkedList.insert(7, 5);  // insert O(n)
myLinkedList.search(7);  // search O(n)

myLinkedList.delete(7);  // delete O(n)

myLinkedList.print();
console.log(myLinkedList);