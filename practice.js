// Javascript - {}
// Topic - Build Data Structure
// Problem: Exercise Implement a Hash Table with the methods below
//          - set and get

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
         hash += key.charCodeAt(i);
      }
      hash %= this.data.length;
      return hash;  
   }

   set(key, value){
      const hash = this._hash(key);
      this.data[hash] = [key, value];
      return this.data;
   }

   get(key) {
      const hash = this._hash(key);
      return this.data[hash][1];
   }
}

const hashtable = new MyHashTable(50);
hashtable.set("name", "daniel");
const name = hashtable.get("name");

hashtable.print()