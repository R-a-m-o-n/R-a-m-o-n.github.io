window.addEventListener("load", function () {
  let numero1 = document.getElementById("num1");
  let numero2 = document.getElementById("num2");
  let operacion = document.getElementById("select");
  let div_resultado = document.getElementById("resultado");
  SpanAño = document.getElementById("año");
  let box= document.getElementById("box");
  

  numero1.addEventListener("keyup", function () {
     div_resultado.innerHTML = " ";
    num_1 = +numero1.value;
    num_2 = +numero2.value;
    metodo = operacion.value;
    if(numero1.value.length!==0 && numero2.value.length!==0 && metodo!=="select"){
        if (metodo == "sumar") {
          resultado = num_1 + num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "restar") {
          console.log(num_1 - num_2);
          resultado = num_1 - num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "multiplicar") {
          console.log(num_1 * num_2);
          resultado = num_1 * num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "dividir") {
          console.log(num_1 / num_2);
          resultado = num_1 / num_2;
          div_resultado.innerHTML += resultado;
        } else {
          console.log("hola");
        }
    }
  });
  numero2.addEventListener("keyup", function () {
    
    div_resultado.innerHTML = " ";
    num_1 = +numero1.value;
    num_2 = +numero2.value;
    metodo = operacion.value;

    if(numero1.value.length!==0 && numero2.value.length!==0 && metodo!=="select"){
        if (metodo == "sumar") {
          resultado = num_1 + num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "restar") {
          console.log(num_1 - num_2);
          resultado = num_1 - num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "multiplicar") {
          console.log(num_1 * num_2);
          resultado = num_1 * num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "dividir") {
          console.log(num_1 / num_2);
          resultado = num_1 / num_2;
          div_resultado.innerHTML += resultado;
        } else {
          console.log("hola");
        }
    }
  });

  operacion.addEventListener("change", function () {
    div_resultado.innerHTML = " ";
    num_1 = +numero1.value;
    num_2 = +numero2.value;
    metodo = operacion.value;

    if(numero1.value.length!==0 && numero2.value.length!==0 && metodo!=="select"){
        if (metodo == "sumar") {
          resultado = num_1 + num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "restar") {
          console.log(num_1 - num_2);
          resultado = num_1 - num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "multiplicar") {
          console.log(num_1 * num_2);
          resultado = num_1 * num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "dividir") {
          console.log(num_1 / num_2);
          resultado = num_1 / num_2;
          div_resultado.innerHTML += resultado;
        } else {
          console.log("hola");
        }
    }
  });

  numero1.addEventListener("change", function () {
    div_resultado.innerHTML = " ";
    num_1 = +numero1.value;
    num_2 = +numero2.value;
    metodo = operacion.value;

    if(numero1.value.length!==0 && numero2.value.length!==0 && metodo!=="select"){
        if (metodo == "sumar") {
          resultado = num_1 + num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "restar") {
          console.log(num_1 - num_2);
          resultado = num_1 - num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "multiplicar") {
          console.log(num_1 * num_2);
          resultado = num_1 * num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "dividir") {
          console.log(num_1 / num_2);
          resultado = num_1 / num_2;
          div_resultado.innerHTML += resultado;
        } else {
          console.log("hola");
        }
    }
  });

  numero2.addEventListener("change", function () {
    div_resultado.innerHTML = " ";
    num_1 = +numero1.value;
    num_2 = +numero2.value;
    metodo = operacion.value;

    if(numero1.value.length!==0 && numero2.value.length!==0 && metodo!=="select"){
        if (metodo == "sumar") {
          resultado = num_1 + num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "restar") {
          console.log(num_1 - num_2);
          resultado = num_1 - num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "multiplicar") {
          console.log(num_1 * num_2);
          resultado = num_1 * num_2;
          div_resultado.innerHTML += resultado;
        } else if (metodo == "dividir") {
          console.log(num_1 / num_2);
          resultado = num_1 / num_2;
          div_resultado.innerHTML += resultado;
        } else {
          console.log("hola");
        }
    }
  });
  const fecha = new Date();
  const añoActual = fecha.getFullYear();
  SpanAño.innerHTML += "© " + añoActual + " Derechos Reservados";
});
