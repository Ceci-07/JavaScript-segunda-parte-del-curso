// let persona = {
//   name: 'Emma',
//   lastName: 'Morelli',
//   age: 20,
// }

function Persona(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

const persona1 = new Persona("Emily", "Lopez", 20);

console.log(persona1);

persona1.nationality = "Colombia"; //asi se agrega nueva propiedad a las instancias.

const persona2 = new Persona("Camil", "Benjhort", 35)
console.log(persona2);

Persona.prototype.greet = function () {
  console.log(`Hello, my Name is ${this.name} ${this.lastName}`);
} //Así se genera nuevos metodos que despues se puedan compartir con las nuevas instancias.
persona1.greet()
persona2.greet()
