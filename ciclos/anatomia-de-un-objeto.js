/*
Los objetos son una estructura de datos que ayuda a guardar valores--> key/value

objeto{
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
    METODOS-->Dentro es esta estructura los objetos llevan metodos, son funciones que estan dentro de objetos y nos ayudan a generar interaccion
}
LOS OBJETOS SON LA BASE DE LO QUE NOS LLEVA A GENERAR UN PARADIGMA DE PROGRAMACIÓN QUE ES ABSTRAER COSAS DE LA REALIDAD PARA LLEVARLA A PROGRAMACIÓN.
*/

const persona = {
  name: 'John',
  age: 30,
  address: {
    street: "Lago Esperanza 465",
    city: "Mexico"
  },
  greet() {
    console.log(`Hello my Name is  ${persona.name}`);
  }
}
console.log(persona);

console.log(persona.name);

persona.greet();

persona.phone = "555-353-21"; //-->Así se puede agregar una nueva propiedad
console.log(persona.phone);

persona.dismiss = () => { //-->Así se puede agregar un nuevos metodos
  console.log("Bye");
}
persona.dismiss();

console.log(persona.address.street);

delete persona.phone //-->asi seria para borrar alguna propiedad
