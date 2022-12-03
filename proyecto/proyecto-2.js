//operaciones

function triangulo(numero) {
  for (let i = 0; i < numero; i++) {
    let star = ' ';
    //console.log(star);
    for (let j = 0; j < i; j++) {
      star += ' * ';
    }
    for (let k = numero; k > i; k--) {
      star += ' # ';
      //console.log(star);
    }
    star += "\n"
    console.log(star);
  }
}

function numeroElevado(numero, potencia) {
  let potenciado = numero;
  for (let i = 0; i < potencia; i++) {
    potenciado = numero ** potencia
  }
  return potenciado;
}

function numeroElevadoRecursiva(numero, potencia) {
  if (potencia == 1) {
    return numero;
  } else {
    return numero * numeroElevadoRecursiva(numero, potencia - 1);
  }
}

function sumaRecursiva(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return array.pop(0) + sumaRecursiva(array);
  }
}

function main(params) {
  triangulo(10);
  console.log("El resultado del numero elevado es:", numeroElevado(9, 3));
  console.log("El resultado del numero elevado es:", numeroElevadoRecursiva(9, 3), "por metodo recursivo");
  console.log("La suma de todos lo elemtos del array es: ", sumaRecursiva([2, 3, 4, 5, 6]));
}
main();