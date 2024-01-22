// Una clase es un molde que vamos a construir para poder crear nuevos objetos

class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my Name is ${this.name} and I am ${this.age} years old.`);
  }
}

const persona1 = new Persona("Fabricio", 19);

persona1.greet();
