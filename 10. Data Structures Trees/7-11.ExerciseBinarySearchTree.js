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
         if (value === cur.value) return "no duplicate nodes allowed";  // check for duplicate node
         holdParent = cur;

         if (value < cur.value){
            cur = cur.left;
            if (cur === null){
               holdParent.left = newNode;    // add node
            }
         } else if (value > cur.value){
            cur = cur.right;
            if (cur === null){
               holdParent.right = newNode    // add node
            }
         } 
         
      }
   }

   lookup(value){
      // check params
      if (value === undefined || value === null) return "lookup was unsuccessful";
      if (!this.root) return "there is no root node"
      
      let cur = this.root;

      while(cur !== null){
         if (value === cur.value){
            return cur;
         } else if (value < cur.value){
            cur = cur.left;      // go left
         } else {
            cur = cur.right;     // go right
         }
      }
      return "No Such Node Exists"
   }

   remove(value) {
      // check param
      if (value === this.root.value){
         // remove head node to next greatest
      }
      let cur = this.root;
      let curParentNode = null;

      let delNode = null;
      let parentNode = null;
      
      while (cur !== null){
         if (!delNode) parentNode = cur;

         if (!delNode && value < cur.value) {
            cur = cur.left;    // go left
         } else if (!delNode && value > cur.value){
            cur = cur.right;   // go right
         }

         // if node to be deleted is found
         if (value === cur.value) {
            delNode = cur;

            if (cur.right === null && cur.left === null) {
               if (parentNode.left === delNode) parentNode.left = null;
               else parentNode.right = null;
               console.log("Bottom Deletion Successful!");
               return this;
            }
            // find closest greater number to del Node
            if (cur.right) cur = cur.right;
            else if (cur.left){  // if ever called then (move left once) and (set parent node to point to cursor)
               cur = cur.left;
               if (parentNode.right === delNode) {
                  parentNode.right = cur;
                  break;
               }
               else if (parentNode.left === delNode) {
                  parentNode.left = cur;
                  break;
               }
            }
         }

         if (delNode){
            curParentNode = cur;
            if (cur.value > delNode.value) {
               if (cur.left){
                  cur = cur.left
                  continue;
               } else if (cur.left === null){
                  console.log(cur.left, cur.right)
                  curParentNode.left = null;
                  cur.left = delNode !== curParentNode && delNode.left !== cur.left ? delNode.left : cur.left;
                  cur.right = cur.right;

                  if (parentNode.right === delNode) {
                     // do something 
                     parentNode.right = cur;
                  } else if (parentNode.left === delNode) {
                     parentNode.left = cur;
                  }
                  // else if (parentNode.right === delNode)

                  console.log("Deletion Successful!")
                  return this;
               }
            } else console.log("NOT GREATER. SADLY!")

         }
         
      }
   }
}
//        9
//    4      20
//  1   6  15   170

const myBST = new BinarySearchTree();
myBST.insert(9);              // insertions
myBST.insert(4);
myBST.insert(20);
myBST.insert(15);
myBST.insert(170);
myBST.insert(1);
myBST.insert(6);

myBST.remove(20);

console.log(myBST.lookup(9))  // lookup
console.log(myBST);