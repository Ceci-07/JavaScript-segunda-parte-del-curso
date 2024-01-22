/*Requerimientos del reto:

1.El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningún timeline.
*/

const userDatabase = [
  {
    username: "Andres",
    password: "123",
  },
  {
    username: "Caroline",
    password: "456",
  },
  {
    username: "Barbie",
    password: "789",
  },
];

const userTimeline = [
  {
    username: "Estefy",
    timeline: "Me encanta JavaScript",
  },
  {
    username: "Marina",
    timeline: "Bebeloper es lo máximo",
  },
  {
    username: "Lourdes",
    timeline: "A mí me gusta el café con leche",
  },
  {
    username: "Carlota",
    timeline: "Hoy no quiero ir a trabajar",
  },
]

const username = prompt("Cuál es tu usuario?")
const password = prompt("Cuál es tu contraseña?")


function usuarioExistente(username, password) {
  for (let i = 0; i < userDatabase.length; i++) {
    if (userDatabase[i].username === username,
      userDatabase[i].password === password) {
      return true
    }
  }
  return false

}

function singIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`)
    console.log(userTimeline);
  } else {
    alert("Uuuups, usuario o contraseña incorrectos")
  }
}
singIn(username, password)
