const names = ['nemo'];
const large = new Array(100000).fill('nemo')

function findNemo (array) {
   t0 = performance.now();
   for (let i = 0; i < array.length; i++) {
      console.log("Found Nemo!");
      break
   }
   t1 = performance.now();
   console.log(`findNemo function took ${t1-t0} ms`)

}

findNemo(large)