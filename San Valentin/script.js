function aceptar() {
    alert("¡Sabía que dirías que sí! ❤️");
}

function moverBoton() {
    let botonNo = document.getElementById("no");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";
}