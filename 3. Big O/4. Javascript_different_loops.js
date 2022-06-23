// Python - 3.10
// Topic - For Loops
// program - We want to see the different types of for loops in javascript

const forLoops = (n) => {
   // 1. Traditional for loop
   for (let i=0; i<n.length; i++){
      console.log(`Traditional for loop - ${i}`)
   };
   
   // 2. ForEach
   n.forEach((item, i) => {
      console.log(`ForEach for loop - ${i, ". ", item}`)
   })

   // 3. For-of
   for (let item of n){
      console.log(`For-of - ${item}`)
   }
   
   // 4. For-in
   for (let item in n){
      console.log(`For-in - ${item}`)
   }
}

forLoops(['a', 'b', 'c', 'd', 'e'])

