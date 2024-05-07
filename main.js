document.getElementById('saludarBtn').addEventListener('click', function() {
    var nombre = prompt("Por favor, ingresa tu nombre:");
    if (nombre) {
        alert("¡Hola, " + nombre + "! Bienvenido.");
        console.log("El usuario ingresó su nombre: " + nombre);
    } else {
        console.log("El usuario canceló la operación.");
    }
});