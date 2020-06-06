var today = new Date(); // Creo un objeto de la fecha
var hourNow = today.getHours(); // obtengo la hora actual del usuario
var greeting; // Variable que usare para mostrar el mensaje

// Muestra el mensaje dependiendo de la hora actual, 
if (hourNow > 18) {
    greeting = "Buenas noches!";
} else if (hourNow > 12) {
    greeting = "Buenas tardes";
} else if (hourNow > 0) {
    greeting = "Buenos dias";
} else {
    greeting = "Bienvenido";
}

document.write("<h3>" + greeting + "</h3>");