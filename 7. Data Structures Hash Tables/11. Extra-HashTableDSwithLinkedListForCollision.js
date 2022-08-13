// Javascript - {}
// Topic - Build Data Structure
// Problem: Exercise Implement a Hash Table with the methods below
//          - set and get
// NOTE: BUT THIS TIME HANDLE COLLISION WITH LINKED LIST

import LinkedList from "../8. Data Structures Linked Lists/18-19.Exercise Reverse";

class MyHashTable {
   constructor(size){
      this.data = new Array(size);
   }
   
   print(){
      console.log(this.data)
   }

   _hash(key){
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
         hash += key.charCodeAt(i) * i;
      }
      hash %= this.data.length;
      return hash;  
   }

   set(key, value){
      const hash = this._hash(key);
      if (!this.data[hash]){
         this.data[hash] = [];
      }
      this.data[hash].push([key, value]);
      return this.data;
   }

   get(key) {
      const hash = this._hash(key);
      if (!this.data[hash]){  // if undefined
         return undefined;
      }
      for (let i = 0; i < this.data[hash].length; i++) {
         if (this.data[hash][i][0] === key){
            return this.data[hash][i][1];
         }
      }
   }

   keys() {   // when collision occurs O(n^2) || when no collisions occur O(n)
      const keysArray = [];
      for (let i = 0; i < this.data.length; i++) {
         if (this.data[i] && this.data[i].length > 1) {   // when collisions occur and address has more than one input
            for (let j = 0; j < this.data[i].length; j++) {
               keysArray.push(this.data[i][j][0]);
            }
         }
         else if (this.data[i]){                         // when no collision and address only has one input
            keysArray.push(this.data[i][0][0]);
         }
      }
      console.log(keysArray);
      return keysArray;
   }
}

const hashtable = new MyHashTable(50);
hashtable.set("daniel", 23);
hashtable.set("naza", 20);
hashtable.set("uche", 25);
hashtable.set("stanley", 29);

hashtable.get("stanley")
hashtable.keys();

hashtable.print()