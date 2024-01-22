/*
this: es una palabra reservada, que utilizamos al momento de trabajar con class-
this hace referencia al objeto mismo
*/

class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const persona1 = new Persona("Caterine", 28)

console.log(persona1);

persona1.nuevoMetodo = function () {
  console.log(`Mi nombre es ${this.nombre}`);
}
