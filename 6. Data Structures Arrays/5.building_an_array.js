// Javascript
// Lecture - Building an Array from scratch
// Tip: In javascript Arrays are simply just objects with keys acting as indexes
// methods to create: get, push, pop, delete

class MyArray {
   constructor(){
      this.length = 0;
      this.data = {};
   }

   get(index){
      return this.data[index];
   }

   push(item){
      this.data[this.length] = item;
      return this.length++;
   }

   pop() {
      const lastItem = this.data[this.length-1];
      delete this.data[this.length-1];
      return lastItem;
   }

   delete(index) {
      const itemToDelete = this.data[index];
      // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      //     ^
      this.shiftIndex(index);
      return this.data;
   }

   shiftIndex(index){
      for(let i=index; i < this.data.length - 1; i++){
         console.log(this.data[index])
         this.data[index] = this.data[index+1];
      }
      delete this.data[this.length-1]
      this.length--;
   }
}

let namesArray = new MyArray()
namesArray.push("daniel")
namesArray.push("nonso")
namesArray.get(1)
// namesArray.pop()
// namesArray.pop()

namesArray.push("nathan")
namesArray.delete(1);
console.log(namesArray)