//Varibles ZONEEE
let botoBloc1 = document.querySelectorAll(".filte-bloc")[0];
let botoBloc2 = document.querySelectorAll(".filte-bloc")[1];
let botoBloc3 = document.querySelectorAll(".filte-bloc")[2];

let cercaEnunciat = document.querySelector("#enunciat-busqueda");
let cercaResposta = document.querySelector("#resposta-busqueda");
let cercaCodi = document.querySelector("#codi-busqueda");

let botoCercaEnunciat = document.querySelectorAll(".botos-buscar")[0];
let botoCercaResposta = document.querySelectorAll(".botos-buscar")[1];
let botoCercaCodi = document.querySelectorAll(".botos-buscar")[2];

let buttonNeteja = document.querySelector("#button-neteja");

let sections = document.querySelectorAll("section");

var preguntes = document.querySelectorAll(".preguntes");
//------------------------------------------------------------------------------------


//Butons de blocs

botoBloc1.addEventListener("click",() => {
    sections.forEach(element => {
        element.style.display = "none";
    });

    sections[0].style.display = "block";
});

botoBloc2.addEventListener("click",() => {
     sections.forEach(element => {
        element.style.display = "none";
    });

    sections[1].style.display = "block";
});

botoBloc3.addEventListener("click",() => {
     sections.forEach(element => {
        element.style.display = "none";
    });

    sections[2].style.display = "block";
});


//Butons de cerca

botoCercaEnunciat.addEventListener("click",() => {

    preguntes.forEach(element => {

        let aux = element.firstElementChild;
        
        if(aux.textContent.toLowerCase().includes(cercaEnunciat.value.toLowerCase())){
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        
    });
});

botoCercaResposta.addEventListener("click",() => {
    preguntes.forEach(element => {

        let aux = element.firstElementChild.nextElementSibling;

        if(aux.textContent.toLowerCase().includes(cercaResposta.value.toLowerCase())){
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        
    });
});

botoCercaCodi.addEventListener("click",() => {
    preguntes.forEach(element => {
        var aux;
        
        try {
            aux = element.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;

            console.log(aux);

            if(aux !== null) {
                if(aux.textContent.toLowerCase().includes(cercaCodi.value.toLowerCase())){
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            } else {
                element.style.display = "none";
            }
        } catch (error) {
            element.style.display = "none";
        }
        
    });
});

buttonNeteja.addEventListener("click", () => {
    cercaEnunciat.value = "";
    cercaResposta.value = "";
    cercaCodi.value = "";

    preguntes.forEach(element => {
        element.style.display = "block";
    });

    sections.forEach(element => {
        element.style.display = "block";
    });
})
