// const titulo = document.head.children[2];

// console.log(titulo.innerHTML);

/* 1: Vincular un archivo "index.html" con uno de JS "js/main.js". En el title y h1 principal del archivo HTML incorporar el texto "Ejercicio". 
Con JS leer directamente el contenido del elemento <title> e imprimirlo en la consola. */

// Acceder al title de html leerlo y mostrarlo por consola
console.log(document.title);

/* \n */

/* función para crear el nombre completo*/
function createFullName(htmlCollection) {
  /* recibe como parametro el listado html q aparece en consola */
  /* como es una concatenacion vamos instanciar una variable de tipo let */

  /* le asignamos un valor de un string vacio, que va ser mi estado inicial, vamos a ir agregando nombres a este string */
  let fullName = "";

  let counter = 1;
  let firstName = true;

  /* Vamos a hacer un for para pasar por las distintas etiquetas */
  /* HTMLCollection va a ser la lista q aparecen en la consola el arrelgo, se van a separar en distintas variables y las voy a pasar siempre
  por parametro  */
  for (let index = 0; index < htmlCollection.length; index++) {
    /* index comienza en 0, esto se va a correr siempre y cuando que index sea menor al largo del array, pero en este caso el array 
    se llama htmlCollection q en este caso va a dar 8, sea va a ir de 0 a 7 y cada vuelta vamos a sumarle 1 al index */
    const element = htmlCollection[index];
    /* vamos a acceder al elemento de cada vuelta del htmlCollection */
    if (element.innerText == "") {
      counter++;
    }

    if (element.tagName === "DD" && element.innerText) {
      if (firstName) {
        /* Si viene el primer nombre */
        fullName = fullName.concat(`${element.innerText} `);
        firstName = false;
      } else {
        if (counter <= 2) {
          fullName = fullName.concat(`${element.innerText} `);
        } else {
          fullName = fullName.concat(`${element.innerText.toUpperCase()} `);
        }
      }
      counter++;
    }
  }
  return `"${fullName.trimEnd()}"`;
}

const fullList = document.getElementById("divList").children;
// const listOne = document.getElementById("list1").children;
/* capturo en una variable el listado 1 de la lista descriptiva con el integrante 1 */

/* Funcion  para mostrar listado*/
function showList(list) {
  /* le pasamos por parametro la lista */
  let text = "";
  /* text va a ser el string total q tiene el nro de integrante y nombre de interante */
  for (let i = 0; i < list.length; i++) {
    const elementList = list[i].children;
    /* Este list[i], cuando se tria normalmente h3 un div, otro h3 y otro div, pero en este caso hay div que engloba todo, entonce el for
    en vez de recorrer el h2 y la description list va a recorrer un div y otro div, entonces hay que ir mas haya de ese div, entonces este list[i]
    es el div, si hago .children, vamos a tener ya los h2 y los dl, aca se mete a los div secundarios, uno por cada vuelta, entonces hay q meterle
    otro for en este caso, para que recorra el h2 y el dl   */
    /* logear elementList */
    // console.log(elementList);
    /* For secundario para acceder a h2 y dl, esto es porque hay una anidacion mas de elementos html los div extra */
    for (let index = 0; index < elementList.length; index++) {
      const h2dlElem = elementList[index];
      /* creamos la nueva variable q va a recorrer ahora si los elementos en las diferentes posiciones con el index */

      if (h2dlElem.tagName === "H2") {
        /* si es igual a h2 vamos a concatenar */
        text = text.concat(`${h2dlElem.innerText}: `);
      }
      if (h2dlElem.tagName === "DL") {
        text = text.concat(createFullName(h2dlElem.children) + "\n");
        /* luego gracias el for secundario ya puedo usar la funcion full name porque ya se lo paso */
        /* aca concateno lo q me devuelve el return de la funcion createFullName, yo le paso los children de este DIV */
        /* le enviamos por parametro el elemento de la lista .children */
      }
    }
  }
  return text;
}
/* llamar a la funcion para mostrarla */
/* Hay que acceder al childre del children , tenemos una collecion de 2 elementos , 0 con el primer div y 1 con el segundo div*/
// console.log(fullList);
// console.log(showList(fullList));

console.log(`-------\n${showList(fullList)}---------`);

/* Ejemplo priemr integrante no tiene segundo nombre, y el segundo integrante no tiene segundo apellido
entonces vamos a evaluar si viene ese dato, si viene le agregamos el espacio, y si no viene no se lo agregamos, para que quede todo automatizado
 */

/* al final llamamos a la funcion y le mandamos el listado pro parametro osea listOne */
// console.log(createFullName(listOne));
/* HtmlCollection toma la lista que le mandemos */

/* OTRA FUNCION  */
// let integrantes = document.getElementsByTagName("h2");
// let integranteNum = "";
// function integrante() {
//   for (let i = 0; i < integrantes.length; i++) {
//     integranteNum = integranteNum + integrantes[i].innerText + "\n";
//   }
//   return integranteNum;
// }

// console.log(integrante());

/* Mostrar Formulario */
function mostrar() {
  document.getElementById("img").style.display = "block";
}

/* Ocultar formulario */
function ocultar() {
  document.getElementById("img").style.display = "none";
}
