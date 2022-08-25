// Javascript - {}
// Topic: BFS
// Problem: create a Binary Search Tree with the below methods
// method: insert, lookup, remove

class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor (){
      this.root = new Node();
   }
   insert(value) {
      if (!this.root.value){
         // initialize root node
         this.root.value = value;
      }

      
   }
}