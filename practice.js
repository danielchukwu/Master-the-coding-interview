const findNemo = (array, find) => {
   const start = performance.now();
   for (let i=0; i<array.length; i++) {
      const element = array[i];
      if (element === find){
         console.log("FOUND NEMO!!!");
         break;
      }
      console.log(i);
   }
   const end = performance.now();
   console.log(end - start + " milliseconds");
};

const arr1 = new Array(100).fill("nemo", 90)

findNemo(arr1, "nemo");