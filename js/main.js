
function createFullName(htmlCollection) {

  let fullName = "";

  for (let index = 0; index < htmlCollection.length; index++) {
   
    const element = htmlCollection[index];
  
    if (element.tagName === "DD" && element.innerText) {
     
      fullName = fullName.concat(`${element.innerText} `);
     
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

const dl = document.getElementsByTagName("dl");

function nombre (pn,sn,pa,sa){
  this.firstNom = pn;
  this.secondNom = sn;
  this.firstApe = pa;
  this.secondApe = sa;
}

let primName; 
let segunName;
let primApell;
let segunApell;
let members = [];
let person;

for (let i = 0; i < dl.length; i++) {
  const dlChild = dl[i].children;
    for (let x = 0; x < dlChild.length; x++) {
      // const element = dlChild[x];
      switch (x) {
        case 1:
          primName = dlChild[x].innerHTML
          break;
        case 3:
          segunName = dlChild[x].innerHTML
          break;
        case 5:
          primApell = dlChild[x].innerHTML
          break;
        case 7:
          segunApell = dlChild[x].innerHTML
          break;
        }
    }
    person = new nombre(primName,segunName,primApell,segunApell);
  members.push(person);
}
function comparar (data){

  for (let i = 0; i < data.length -1; i++) {
    let color;
    let clas1;
    let clas2;
    if (data[i].firstNom === data[i+1].firstNom) {
      color = window.prompt(`El primer nombre ${data[i].firstNom } coincide con el otro primer nombre, Por favor ingresa un color para diferenciarlos`);
      console.log(`hubo coincidencia en los nombres ${data[i].firstNom }`);
      clas1 = document.getElementById("1_fristnom");
      clas2 = document.getElementById("2_fristnom");
      clas1.style = `color: ${color}`;
      clas2.style = `color: ${color}`;
    } else if (data[i].firstNom === data[i+1].secondNom) {
      color = window.prompt(`El primer nombre ${data[i].firstNom } coincide con el segundo nombre, Por favor ingresa un color para diferenciarlos`);
      console.log(`hubo coincidencia en los nombres ${data[i].firstNom }`);
      clas1 = document.getElementById("1_fristnom");
      clas2 = document.getElementById("2_secondnom");
      clas1.style = `color: ${color}`;
      clas2.style = `color: ${color}`;
    } else if (data[i].secondNom === data[i+1].firstNom) {
      color = window.prompt(`El segundo nombre ${data[i].secondNom } coincide con el primer nombre, Por favor ingresa un color para diferenciarlos`);
      console.log(`hubo coincidencia en los nombres ${data[i].secondNom }`);
      clas1 = document.getElementById("1_secondnom");
      clas2 = document.getElementById("2_fristnom");
      clas1.style = `color: ${color}`;
      clas2.style = `color: ${color}`;
    } else if (data[i].secondNom === data[i+1].secondNomNom) {
      color = window.prompt(`El segundo nombre ${data[i].secondNom } coincide con el otro segundo nombre, Por favor ingresa un color para diferenciarlos`);
      console.log(`hubo coincidencia en los nombres ${data[i].secondNom }`);
      clas1 = document.getElementById("1_secondnom");
      clas2 = document.getElementById("2_secondnom");
      clas1.style = `color: ${color}`;
      clas2.style = `color: ${color}`;
    } else {
      console.log("No hubo coincidencias de nombres")
        if(confirm("No hubo coincidencias de nombres, ¿deseas comparar los apellidos?")) {
          if (data[i].firstApe === data[i+1].firstApe) {
            color = window.prompt(`El primer apellido ${data[i].firstApe } coincide con el otro primer apellido, Por favor ingresa un color para diferenciarlos`);
            console.log(`hubo coincidencia en los apellidos ${data[i].firstApe }`);
            clas1 = document.getElementById("1_fristapell");
            clas2 = document.getElementById("2_fristapell");
            clas1.style = `color: ${color}`;
            clas2.style = `color: ${color}`;
          }else if (data[i].firstApe === data[i+1].secondApe) {
            color = window.prompt(`El primer apellido ${data[i].firstApe } coincide con el segundo apellido, Por favor ingresa un color para diferenciarlos`);
            console.log(`hubo coincidencia en los apellidos ${data[i].firstApe }`);
            clas1 = document.getElementById("1_fristapell");
            clas2 = document.getElementById("2_secondapell");
            clas1.style = `color: ${color}`;
            clas2.style = `color: ${color}`;
          }else if (data[i].secondApe === data[i+1].firstApe) {
            color = window.prompt(`El segundo apellido ${data[i].secondApe } coincide con el primer apellido, Por favor ingresa un color para diferenciarlos`);
            console.log(`hubo coincidencia en los apellidos ${data[i].secondApe }`);
            clas1 = document.getElementById("1_secondapell");
            clas2 = document.getElementById("2_firstapell");
            clas1.style = `color: ${color}`;
            clas2.style = `color: ${color}`;
          }else if (data[i].secondApe === data[i+1].secondApe) {
            color = window.prompt(`El segundo apellido ${data[i].secondApe } coincide con el otro segundo apellido, Por favor ingresa un color para diferenciarlos`);
            console.log(`hubo coincidencia en los apellidos ${data[i].secondApe }`);
            clas1 = document.getElementById("1_secondapell");
            clas2 = document.getElementById("2_secondapell");
            clas1.style = `color: ${color}`;
            clas2.style = `color: ${color}`;
          } else{
            console.log("No hubo coincidencias de apellidos")
          }
    }
  }

}
}
comparar(members);

