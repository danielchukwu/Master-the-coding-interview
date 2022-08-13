// Javascript - {}
// Topic - Build a Data Structure
// Problem: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in 
// reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked 
// list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
// Accepted
// 3,004,830
// Submissions
// 7,652,351

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

class ListNode{
   constructor (val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
   }
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
console.log(l1);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(l2)

var addTwoNumbers = function(l1, l2) {
   // check params: non-empty, contains += integers only,
   const l3 = new ListNode();
   let tail = l3;
   
   let carry = 0;
   while (l1 || l2 || carry){
      let top = l1 ? l1.val : 0;
      let bottom = l2 ? l2.val: 0;
      
      // sum
      let sum = top + bottom + carry;
      carry = Math.floor(sum/10);   // check if sum >= 10
      sum = sum % 10;  // check sum again and make sure it contains only 1 digit
      
      tail.next = new ListNode(sum);
      tail = tail.next;
      
      // move pointer
      l1 = l1 ? l1.next : 0;
      l2 = l2 ? l2.next : 0;
   }
   return l3.next;
}

const r1 = addTwoNumbers(l1, l2);
console.log(r1)

const r2 = addTwoNumbers(new ListNode(5), new ListNode(5));
console.log(r2)
