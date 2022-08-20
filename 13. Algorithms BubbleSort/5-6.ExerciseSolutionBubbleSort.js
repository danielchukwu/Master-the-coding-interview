// Javascript - {}
// Topic: Algorithms(sorting)
// Problem: Implement a Bubble sort Algorithm 
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array) {

// }

// bubbleSort(numbers);
// console.log(numbers);


// Solution 

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {  // Bubble sort => Time O(n^2), Space 
   // check params: length, data type
   let i = 0
   let arraySize = numbers.length-1;

   while (i <= arraySize){
      // comparison done
      if (arraySize === 0){
         break;
      }
      // compare again from beginning
      if (i === arraySize){
         i = 0;
         arraySize--;
         continue;
      }

      // swap elements if first greater than 7
      if (array[i] > array[i+1]){
         [array[i], array[i+1]] = [array[i+1], array[i]];  // swap
      }

      i++;
   }
}

bubbleSort(numbers);
console.log(numbers);