// Javascript - {}
// Topic - Coding Interview Problem
// Problem: Build a Max Heap
// - insert
// - lookup
// - remove

class Heap {
   constructor(isMax = false) {
      this.array = [];
      this.isMax = isMax;
   }
   insert(value) {
      // check param: data type, nu, exists, is array empty
      this.array.push(value);
      if (this.isMax) { this.sortMaxHeap(); }
      else { this.sortMinHeap(); }

      return this;
   }

   sortMaxHeap() {
      let i = this.array.length;                  // index+1 of last item
      let j = Math.floor(i / 2);  // index+1 of parent item

      console.log(this.array)
      console.log(`v=${i} `, `p=${j}`)
      console.log(`v=${this.array[i - 1]} `, `p=${this.array[j - 1]}`)

      // sort new value for maximum
      while (j - 1 >= 0) {
         let val = this.array[i - 1];
         let parent = this.array[j - 1];

         if (val > parent) {
            [this.array[i - 1], this.array[j - 1]] = [this.array[j - 1], this.array[i - 1]]  // swapped
            i = j;
            j = Math.floor(j / 2);
         } else {
            break;
         }
      }
   }
}

const myHeap = new Heap(true);
myHeap.insert(5);
myHeap.insert(12);
myHeap.insert(64);
myHeap.insert(1);
myHeap.insert(37);
myHeap.insert(90);
myHeap.insert(91);
myHeap.insert(97);

console.log(myHeap.array);