// Javascript - {}
// Topic - Build a Data Structure
// Problem: Build a Stack Data Structure with the following methods 
// - peek
// - push
// - pop 
// - isEmpyt (optional)

class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Stack {
   constructor(value=null){
      this.top = value ? new Node(value) : null;
      this.bottom = this.top;
      this.length = value ? 1 : 0;
   }
   peek(){
      return this.top;
   }
   push(value){
      let newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.length ++;
      return this.length;
   }
   pop(){
      // checks: if empty return
      if (!this.top) return;

      const newTop = this.top.next;
      this.top = newTop;
      this.length--;
   }

   isEmpty(){
      return !this.length ? true : false;
   }

   printStack(){
      let cur = this.top;

      while (cur !== null){
         console.log(cur.value);
         console.log("  |  ");
         cur = cur.next;
      }
      console.log("null");
      return myStack.top;
   }
}

const myStack = new Stack("google");
myStack.push('udemy');
myStack.push('youtube');
myStack.push('discord');
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack.isEmpty())

console.log(myStack.printStack())
console.log(myStack.length)