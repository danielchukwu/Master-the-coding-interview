// Javascript - {}
// Topic - Coding Interview Problem
// Problem: Build a Binary Search Tree Data Structure with the following methods
// - insert
// - lookup
// - remove

class Node {
   constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor(){
      this.root = null;
   }
   insert(value){
      if (!this.root){
         this.root = new Node(value);
         return this;
      }

      let cur = this.root;
      let holdParent = this.root;

      while(cur !== null){
         const newNode = new Node(value);

         if (value <= cur.value){
            holdParent = cur;
            cur = cur.left;
            if (cur === null){
               holdParent.left = newNode;    // add node
            }
         } else {
            holdParent = cur;
            cur = cur.right;
            if (cur === null){
               holdParent.right = newNode    // add node
            }
         }
      }
   }
}