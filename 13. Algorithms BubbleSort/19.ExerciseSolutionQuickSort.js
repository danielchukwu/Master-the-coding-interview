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
      return array;
   }

   // pick pivot and move to right position
   let pivot = comparePivot(array);
   // console.log(pivot);

   // grap left and right to the pivot and also grab the pivot
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

// const result = quickSort(numbers);
// console.log(result);



// Tutor's Solution

function quickSort(array, left, right){
   debugger;
   const len = array.length; 
   let pivot;
   let partitionIndex;

   if(left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right);
      
      //sort left and right
      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
   }
   return array;
}
   
function partition(array, pivot, left, right){
   let pivotValue = array[pivot];
   let partitionIndex = left;

   for(let i = left; i < right; i++) {
      if(array[i] < pivotValue){
         swap(array, i, partitionIndex);
         partitionIndex++;
      }
   }
   swap(array, right, partitionIndex);
   return partitionIndex;
   }

   function swap(array, firstIndex, secondIndex){
      var temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);