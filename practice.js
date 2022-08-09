// Javascript - {}
// Topic - class


class ArrayList{

   constructor(){
      this.list = {};
      this.length = 0;
   }

   push(value){
      this.list[this.length] = value;
      this.length ++;
   }

   pop(){
      this.length--;
      delete this.list[this.length];
   }

   shift() {
      for (let i=0; i<this.length-1; i++){
         this.list[i] = this.list[i+1];
      }
      this.length--;
   }

   unshift(value) {
      for (let i=this.length; i>0; i--){
         this.list[i] = this.list[i-1];
      }
      this.list[0] = value;
      this.length++;
   }

   splice(start, deletecount, value){
      if ((typeof(start) !== 'number' || typeof(deletecount) !== 'number') && deletecount >= 0) return;

      if (start >= 0 && start < this.length){
         this.list[start] = value;
      }

      // return if theres nothing to delete
      if (deletecount < 1){
         return;
      }

      // delete all items to be deleted
      this.length-= deletecount;
      for (let i = start+deletecount; i > start; i--) {
         delete this.list[i];
      }
   }

   print(){
      console.log(this.list);
      console.log(this.length);
   }
}


function main () {
   const list = new ArrayList();
   list.push("daniel");
   list.push("stanley");
   list.push("uche");
   list.push("naza");
   list.shift();
   list.push("sam");
   list.unshift("anointing");
   list.splice(0, 2, "the rock")

   list.print();
   
}
main();