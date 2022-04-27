window.addEventListener("load", function () {
  div_imagenes = document.getElementById("imagenes");
  botonVerMas = document.getElementById("boton_imagenes");
  SpanAño = document.getElementById("año");
  let imagenes = [
    "Imagenes/foto1.jpg",
    "Imagenes/foto2.jpg",
    "Imagenes/foto3.jpg",
    "Imagenes/foto11.jpg",
    "Imagenes/foto22.jpg",
    "Imagenes/foto33.jpg",
    "Imagenes/foto111.jpg",
    "Imagenes/foto222.jpg",
    "Imagenes/foto333.jpg",
  ];
  
  let a = 3;
  let b = 4;
  let c = 5;
  let limite = imagenes.length - 1;

  botonVerMas.addEventListener("click", function () {
    a = a + 3;
    b = b + 3;
    c = c + 3;
    if (a <= limite) {
      div_imagenes.innerHTML += `
      <div class="col-md-4">
        <img
          src=${imagenes[a]}
          class="img-thumbnail img-fluid"
          alt=":3"
        />
      </div>`;
    }

    if (b <= limite) {
      div_imagenes.innerHTML += `
      <div class="col-md-4">
        <img
          src=${imagenes[b]}
          class="img-thumbnail img-fluid"
          alt=":3"
        />
      </div>`;
    }

    if (c <= limite) {
      div_imagenes.innerHTML += `
      <div class="col-md-4">
        <img
          src=${imagenes[c]}
          class="img-thumbnail img-fluid"
          alt=":3"
        />
      </div>
      `;
    }

    if (a == limite || b == limite || c == limite) {
      botonVerMas.style.display = "none";
    }
  });

  const fecha = new Date();
  const añoActual = fecha.getFullYear();
  SpanAño.innerHTML += "© " + añoActual + " Derechos Reservados";
});
