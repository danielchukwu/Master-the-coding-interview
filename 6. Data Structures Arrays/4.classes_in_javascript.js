// JAVASCRIPT
// Lecture - On Classes

class Car {

   constructor (type, color, glass_color) {
      console.log('class Car:',this)
      this.type = type;
      this.color = color;
      this.glass_color = glass_color;
   }

   drive() {
      console.log(`I am now driving this ${this.type}, and i love it's color ${this.color}`);
   }
}

class Motor extends Car {
   
   constructor (name, type, color, glass_color) {
      // console.log(this)
      super(type, color, glass_color);
      this.name = name;
   }

   drift() {
      console.log(`You just drifted 180 with your ${this.name}`)
      return true
   }
}

// const car1 = new Car("sedan", "black", "tinted")
const motor1 = new Motor("mercedes benz", "sedan", "white", "tinted")

console.log(motor1.drift())