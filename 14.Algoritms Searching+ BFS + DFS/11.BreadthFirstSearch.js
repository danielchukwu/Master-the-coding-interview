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
      // debugger;
      if (this.root.value === undefined){
         // initialize root node
         this.root.value = value;
         return;
      }
      let cur = this.root;
      const newNode = new Node(value);

      while (cur) {
         if (value > cur.value){
            if (cur.right === null) {
               cur.right = newNode;
               break;
            }
            // move right
            cur = cur.right;
         } else {
            if (cur.left === null) {
               cur.left = newNode;
               break;
            }
            // move left
            cur = cur.left;
         }
      }
   }
   lookup(value) {
      // check param
      if (value === undefined || value === null) return "invalid parameters passed in";
      if (!this.root.value) return "empty tree";

      let cur = this.root;
      
      while (cur) {
         if (value === cur.value){
            // node found. return node
            return cur;
         }

         if (value > cur.value){
            cur = cur.right;
         } else {
            cur = cur.left;
         }
      }
   }
   
   print (node = this.root) {
      // base case
      if (!node.right && !node.left) return node.value;

      // recursive case
      return `${node.value} -> ${this.print(node.left)} [->] ${this.print(node.right)}`
   }
}


const myBst = new BinarySearchTree();
myBst.insert(9);
myBst.insert(4);
myBst.insert(20);
myBst.insert(1);
myBst.insert(6);
myBst.insert(15);
myBst.insert(170);

result = myBst.lookup(15)
console.log(result);

structure = myBst.print();
console.log(structure);