// Javascript - {}
// Topic: Sorting
// Problem: Implement a Quick Sort Algoritm 
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function quickSort(array){

// }

// const result = quickSort(numbers);
// console.log(result);



// My Solution


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array){
   // base case
   if (array.length === 1){
      // debugger;
      return array;
   }

   // pick pivot and compare
   let pivot = comparePivot(array);
   // console.log(pivot);

   // divide array using pivot
   let left = array.slice(0,pivot);
   let right = array.slice(pivot+1);
   let center = array[pivot];
   // console.log(array)

   // recursive case
   left = left.length > 0 ? quickSort(left) : left;
   right = right.length > 0 ? quickSort(right) : right;
   return [...left, center, ...right];
}

function comparePivot (array){
   let i = 0;
   let pivot = array.length-1;
   
   while (i < pivot){
      if (array[i] > array[pivot]){
         let temp = array[pivot];
         array[pivot] = array[i];
         array[i] = pivot-1 !== i ? array[pivot-1] : array[pivot];
         array[pivot-1] = temp;
         pivot--;
      } else {
         i++;
      }
   }
   return pivot;
} 

const result = quickSort(numbers);
console.log(result);