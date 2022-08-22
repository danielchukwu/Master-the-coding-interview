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

// insertionSort(numbers);
// console.log(numbers);



// Tutors Solution

function insertionSort2(array){
   for (let i = 0; i < array.length; i++) {
      if (array[i] < array[0]){
         // move number to the first position
         array.unshift(array.splice(i,1)[0]);

      } else {
         // find where number should go
         for (let j = 1; j < i; j++) {
            if(array[i] > array[j-1] && array[i] < array[j]){
               // move number to the right position
               array.splice(j, 0, array.splice(i,1)[0]);
            }
         }
      }
   }
}

insertionSort2(numbers);
console.log(numbers);