// Javascript - {}
// Program - Recursion


// Recursion 
let counter = 0;
function inception() {
   debugger;
   if (counter > 3){
      return "done!";
   }
   counter++;
   inception();
}

let result = inception()
console.log(result);