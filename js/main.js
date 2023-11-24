// const titulo = document.head.children[2];

// console.log(titulo.innerHTML);

/* 1: Vincular un archivo "index.html" con uno de JS "js/main.js". En el title y h1 principal del archivo HTML incorporar el texto "Ejercicio". 
Con JS leer directamente el contenido del elemento <title> e imprimirlo en la consola. */

// Acceder al title de html leerlo y mostrarlo por consola
console.log(document.title);

// const aldo = document.getElementById("aldo").innerText;
// const esteban = document.getElementById("esteban").innerText;
// const vera = document.getElementById("vera").innerText;
// const zúñiga = document.getElementById("zúñiga").innerText;

// const santiago = document.getElementById("santiago").innerText;
// const romero = document.getElementById("romero").innerText;

/* \n */
// console.log(
//   `Integrante 1: ${aldo} ${esteban} ${vera} ${zúñiga}
// Integrante 2: ${santiago} ${romero}`
// );

// const dl1 = document.getElementById("list1").children;
// // console.log(dl1[1].innerText);
// console.log(dl1);


// function capture(dl1, dl2) {
    //   dl1 = dl1[1].innerText;
    //   dl2 = dl2[1].innerText;
    
    //   return `Integrante 1: ${dl1} \nIntegrante 2: ${dl2}`;
    // }
    
    // console.log(capture(dl1, dl2));
    
    const dl= document.getElementsByTagName("dl");
    function members (list) {
        let quantity = "";
        for(let i = 0; i < list.length; i++){ 
            let element = list[i];
            function membersName () {  
                let name = ""
                for (let x = 0; x < element.childElementCount; x++) {
                    let person = list[i].children;
                    if(person[x].tagName === "DD" && x === 1){
                        name = name.concat(`${person[x].innerHTML}`);
                    }
                    if(person[x].tagName === "DD" && person[x].innerHTML !== "" && x !== 1){
                        name = name.concat(` ${person[x].innerHTML}`);
                    }
                }
                return name
            }
            quantity = quantity.concat(`Integrante ${i + 1}: "${membersName()}" \n`);
        } 
        return quantity;
    };

    console.log(members(dl));