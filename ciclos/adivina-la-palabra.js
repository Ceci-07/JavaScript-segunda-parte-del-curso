/*
Jugemos a adivinar la palabra.

El usuario tiene 3 intentos para adivinar la palabra oculta.

Requerimientos:
-El juego debe tener una palabra oculta.
-El juego puede dar 1 pista de la palabra.
-El usuario debe ingresar una suposicion.
-El juego debe verificar si la suposicion del usuario es correcta.
-El juego debe tener un número limitado de intentos.
-El juego debe terminar cuando el usuario adivina la palabra o se quede sin intentos.
*/

let palabraOculta = "javascript"
let intentos = 3

function verificarSuposicion(suposicion, palabraOculta) {
  if (suposicion.toLowerCase() === palabraOculta) {
    return true;
  }
  return false;
}

function jugarAdivinaLaPalabra() {
  alert("Bienvenido a jugar adivina la palabra oculta")
  alert("Tienes 3 intentos para adivinar la palabra")
  alert("-PISTA- la palabra oculta es un lenguaje de programación")

  while (intentos > 0) {
    let suposicion = prompt("Adivina la palabra")

    if (verificarSuposicion(suposicion, palabraOculta)) {
      alert("¡Correcto! Has adivinado la palabra.")
      break;
    } else {
      intentos--;
      if (intentos > 0) {
        alert(`Incorrecto, Aún tienes ${intentos} intentos restantes`)
      } else {
        alert(`Agotaste tus intentos, la palabra oculta era ${palabraOculta}`)
      }
    }
  }
}

jugarAdivinaLaPalabra()
