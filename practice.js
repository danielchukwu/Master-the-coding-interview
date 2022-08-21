// Javascript - {}
// Topic - Sorting (Insertion)
// Problem: Implement an Insertion Sort Algorithm
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(array){

// }

// insertionSort(numbers);
// console.log(numbers);



// My Solution

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array){
   // check params
   if (array.length < 2) return array;
   let length = array.length;

   cursor = 1;
   while (cursor < length){

      for (let i=cursor; i > 0; i--){
         // compare current with 
         if (array[i] < array[i-1]){
            // swap smaller number with 
            // greater number
            let temp = array[i];
            array[i] = array[i-1];
            array[i-1] = temp;
         } else {
            cursor++;
            break;
         }
      }
   }

}

insertionSort(numbers);
console.log(numbers);
