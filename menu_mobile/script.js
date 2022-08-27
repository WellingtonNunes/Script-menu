const btnMenu = document.querySelector("#iconMenu");
const listaMenu = document.querySelector("#listaMenu");

function mostraMenu(){
    if(listaMenu.style.display == "block"){
        listaMenu.style.display = "none";
    }else{
        listaMenu.style.display = "block";
    }
}

btnMenu.addEventListener('click', mostraMenu);


