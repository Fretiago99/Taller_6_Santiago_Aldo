function createFullName(htmlCollection) {
  let fullName = "";

  let counter = 1;
  let firstName = true;

  for (let index = 0; index < htmlCollection.length; index++) {
    const element = htmlCollection[index];

    if (element.innerText == "") {
      counter++;
    }

    if (element.tagName === "DD" && element.innerText) {
      /* vamos a evaluar el elemento cuando el tagname o etiqueta sea DD */
      /* si innertext es un espacio vacio osea es falso y si viene falso podemos decirle q solamente concatene cuando innertext tiene algo
      osea cuandoe es true y viene con nombre */
      /* solamente va a concatenar cuando sea DD */
      fullName = fullName.concat(`${element.innerText} `);
      /* en la primer vuelta se le agrego a fullname el nombre aldo, en la segunda vuelta se le agrego un string vacio por lo tanto
      no suma nada a la variable, despues se agrego Vera y luego Zúñiga, el string vacio no influye, el strign vacio q se agrega no tiene ingerencia 
      hace el concat pero no lo agrega*/
      /* ahora se le da un espacio para que no quede todo el nombre pegado */
      /* una de las formas de hacer la concatenacion es: */
      // console.log(element.innerText);
      // if (element.innerText) {
      /* hay algo en element.innertext? si hay algo */
      /* vamos a fullname q ya tiene concatenado el fullname de la linea 34 y le agregamos el espacio*/
      //   fullName = fullName.concat(" ");
      // }
    }
  }
  return `"${fullName.trimEnd()}"`;
}

const fullList = document.getElementById("divList").children;

function showList(list) {
  let text = "";

  for (let i = 0; i < list.length; i++) {
    const elementList = list[i].children;

    for (let index = 0; index < elementList.length; index++) {
      const h2dlElem = elementList[index];

      if (h2dlElem.tagName === "H2") {
        text = text.concat(`${h2dlElem.innerText}: `);
      }
      if (h2dlElem.tagName === "DL") {
        text = text.concat(createFullName(h2dlElem.children) + "\n");
      }
    }
  }
  return text;
}
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
