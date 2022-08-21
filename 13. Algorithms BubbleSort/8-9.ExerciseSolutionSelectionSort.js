// Javascript - {}
// Topic: Sorting
// Problem: Implement a selection sort Algorithm 
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(array){

// }

// selectionSort(numbers);
// console.log(numbers);



// My solution

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array){
   // check params: size of array, data type
   if (array.lenght < 2) return array;

   let length = array.length;
   let min = 0;   // 1st pointer - holds smallest value index
   let j = 0;   // 2nd pointer
   let swap_index = 0

   while (j < length){
      // check to update smallest
      if (array[j] < array[min]){
         min = j
      }
      j++;
      
      // swap
      if (j === length){
         let temp = array[swap_index];
         array[swap_index] = array[min]
         array[min] = temp;
         
         // next iter
         swap_index++;
         min = swap_index;
         j = swap_index;
      }
   }

   return array;
}

// selectionSort(numbers);
// console.log(numbers);


// Tutor's Solution (kind of a tie)

function selectionSort2(array) {
   // check params: size
   if (array.length < 2) return array;
   
   let length = array.length

   for (let i = 0; i < length; i++) {
      // set minimum
      let min = i;
      let temp = array[min];
      
      for (let j=i+1; j < length; j++){
         if (array[j] < array[min]){
            // set minimum to smallest value
            min = j;
         }
      }
      
      array[i] = array[min];
      array[min] = temp;
   }
   return array;
}
selectionSort2(numbers);
console.log(numbers);