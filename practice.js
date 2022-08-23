// Javascript - {}
// Topic: Sorting (Merge Sort)
// Problem: Implement a Merge Sort Algorithm 
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function mergeSort(array){
   //    // base case
   //    if  (array.length === 1){
      //       return array;
      //    }
      //    // split Array into right and left

//    // recursive case
//    retun merge(mergeSort(left), mergeSort(right))
// }
// function merge(left, right){
   // }
   
   // insertionSort(numbers);
   // console.log(numbers);




// My Solution


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function mergeSort(array) {
   // base case
   if (array.length === 1){
      return array;
   }
   
   // divide array
   let mid = Math.floor((array.length)/2);
   let left = array.slice(0,mid);
   let right = array.slice(mid);
   // console.log(left, right);
   
   // recursive case
   return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
   let arr = [];
   
   let i = 0;
   let j = 0;
   
   while (i < left.length && j < right.length){
      // add lowest value
      if (left[i] < right[j]){
         arr.push(left[i]);
         i++;
      } else {
         arr.push(right[j]);
         j++
      }
   }

   return arr.concat(left.slice(i)).concat(right.slice(j));
}

let result = mergeSort(numbers);
console.log(result)