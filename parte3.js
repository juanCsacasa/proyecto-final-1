//arreglo 1
//arreglo 2
//recorrer los dos arreglos
//que me diga si los dos aregglos son iguales
//si no son iguales quee me imprima un nuevo arreglo con los que son diferebtes 

function arreglos(array1, array2) {
  let newarray = [];

  if (array1.length !== array2.length) {
    return "los tamaños son diferentes"
  }

  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      newarray.push(array1[i]);
    }
  }
  if (newarray.length) {
    return "Los elmentos son diferentes " + newarray;
  }
  return "Las listas son iguales"
}

function main() {
  console.log(arreglos([1, 2, 3, 5, 4, 6], [1, 2, 4, 5, 8, 10]));
}
main();