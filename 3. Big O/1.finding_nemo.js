const names = ['nemo'];

function findNemo (array) {
   t0 = performance.now();
   for (let i = 0; i < array.length; i++) {
      console.log("Found Nemo!");
   }
   t1 = performance.now();
   console.log(`findNemo function took ${t1-t0} ms`)

}

findNemo(names)