window.addEventListener("load", function () {
  SpanAño = document.getElementById("año");
  const fecha = new Date();
  const añoActual = fecha.getFullYear();
  SpanAño.innerHTML += "© " + añoActual + " Derechos Reservados";
});
