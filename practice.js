// Javascript - {}
// Topic - Build a Data Structure
// Problem: Build the stack data structure but this time using an ARRAY data structure
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
      this.data = [];
   }
   peek(){
      return this.data[0] ? this.data[this.data.length-1] : null;
   }
   push(value){
      this.data.push(value);
      return this;
   }
   pop(){
      this.data.pop();
      return this;
   }

   isEmpty(){
      return !this.data.length ? true : false;
   }

   printStack(){
      console.log(this.data);
      return this;
   }
}

const mystack = new Stack();
mystack.push('google');
mystack.push('udemy');
mystack.push('youtube');
mystack.pop();
mystack.pop();
mystack.push("1337x");
mystack.push("spotify");

mystack.printStack();
console.log(mystack.peek());