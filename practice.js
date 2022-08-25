// Javascript - {}
// Topic: BFS
// Problem: create a Binary Search Tree with the below methods
// method: insert, lookup, remove

class Node1 {
   constructor (value) {
      this.value = value;
      this.next = null;
   }
}

class Queue {
   constructor(value) {
      this.first = value ? new Node1(value) : null;
      this.last = this.first;
      this.length = value ? 1 : 0;
   }
   enqueue(value){
      this.length++;
      // check param
      if (!value) return "invalid param"
      if (!this.first){
         this.first = new Node1(value);
         this.last = this.first;
         return;
      }

      // add node1
      let newNode1 = new Node1(value);
      let temp = this.last;
      this.last = newNode1;
      temp.next = this.last;
   }
   dequeue(){
      // code here
      let temp = this.first;
      this.first = this.first ? this.first.next : null;
      return temp;
   }
   peek(){
      return this.first;
   }
   print(){
      let cur = this.first;
      let structure = '';

      while (cur){
         // iterate true entire linked list
         structure += `${cur.value} -> `;
         cur = cur.next
      }
      console.log(structure +'null')
   }
}

// export {Queue};


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

   BreadthFirstSearch() {
      // traverse entire BST
      const queue = new Queue();
      let cur = this.root;
      let bfs = 'BST -> ';

      while (cur){
         if (cur.left){
            // add to queue
            queue.enqueue(cur.left);
         } 
         if (cur.right){
            // add to queue
            queue.enqueue(cur.right);
         }
         // console.log(cur.value);
         bfs += `${cur.value} `;
         cur = queue.first ? queue.first.value : null;
         queue.dequeue();
      }
      console.log(bfs);
      return bfs;
   }

   dfsInorder(cur) {
      // base case
      if (cur.left === null && cur.right === null) {
         return [cur.value]
      }

      // recursive case
      let left = cur.left ? this.dfsInorder(cur.left) : [];         // 15
      let right = cur.right ? this.dfsInorder(cur.right) : [];      // 170

      // return [left, cur.value, right];     // [[1, 4, 6], 9 ,[15, 20, 170]]
      return [...left, cur.value, ...right];     // [[1, 4, 6], 9 ,[15, 20, 170]]
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
// console.log(result); 

structure = myBst.print()
// console.log(structure)

// BFS
myBst.BreadthFirstSearch();

// DFS - inOrder
let inOrder = myBst.dfsInorder(myBst.root);
console.log(inOrder)

// DFS - preOrder
let preOrder = myBst.dfsPreOrder(myBst.root);
