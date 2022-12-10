//variables de los inputs 
const calculadora = document.querySelector("#calculadora");
const numero1 = document.querySelector("#nm1");
const numero2 = document.querySelector("#nm2");

//variables de los botones
const suma = document.querySelector(".suma");
const resta = document.querySelector(".resta");
const multiplicar = document.querySelector(".multiplicar");
const dividir = document.querySelector(".dividir");

//variable del contenedor que lleva el resultado
const resultadoDiv = document.querySelector(".resultado");


calculadora.addEventListener("submit", (event) => {
  event.preventDefault()
})


//opereaciones matematicas
suma.addEventListener("click", () => {
  console.log(numero1.value)
  const resultado = parseInt(numero1.value) + parseInt(numero2.value);
  Resultado(resultado);
})

resta.addEventListener("click", () => {
  console.log(numero1.value)
  const resultado = parseInt(numero1.value) - parseInt(numero2.value);
  Resultado(resultado);
})

multiplicar.addEventListener("click", () => {
  console.log(numero1.value)
  const resultado = parseInt(numero1.value) * parseInt(numero2.value);
  Resultado(resultado);
})

dividir.addEventListener("click", () => {
  console.log(numero1.value)
  const resultado = parseInt(numero1.value) / parseInt(numero2.value);
  Resultado(resultado);
})

function Resultado(resultado) {
  resultadoDiv.innerHTML = resultado;
}
