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
      // check param
      if (value === undefined || value === null) return "insertion was unsuccessful!";

      if (!this.root){
         this.root = new Node(value);
         return this;
      }

      let cur = this.root;
      let holdParent = this.root;
      const newNode = new Node(value);

      while(cur !== null){
         holdParent = cur;

         if (value <= cur.value){
            cur = cur.left;
            if (cur === null){
               holdParent.left = newNode;    // add node
            }
         } else {
            cur = cur.right;
            if (cur === null){
               holdParent.right = newNode    // add node
            }
         }
      }

      lookup(value){
      }
   }
}

const myBST = new BinarySearchTree();
myBST.insert(9);
myBST.insert(4);
myBST.insert(20);
myBST.insert(15);
myBST.insert(170);
myBST.insert(1);
myBST.insert(6);

console.log(myBST);