// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//En el trello salia como array
let amigos = [];
let listaNumerosSorteado = [];
function agregarAmigo () {
    let nroRamdon = generarNumeroSecreto ();
    let Nombre = document.getElementById("amigo").value;
    if (!validarNombre(Nombre)) return;
    amigos.push([nroRamdon,Nombre]);
    console.log (amigos);
    limpiarCaja ();
};

function validarNombre (Nombre) {
    if (!Nombre || Nombre.trim().length === 0) {
        alert ("Por favor, inserte un nombre.")
        return false;
    } else {
        return true;
    }
}

function generarNumeroSecreto () {
    let nroRamdon = Math.floor(Math.random()*(amigos.length+1))+1;
        if (listaNumerosSorteado.includes(nroRamdon)) {
            return generarNumeroSecreto ();
        } else {      
            listaNumerosSorteado.push(nroRamdon);
            console.log(listaNumerosSorteado);
            return nroRamdon;
        }
};

function AsignatTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento).value;
    elementoHTML.innerHTML=texto;
};

function limpiarCaja () {
    document.querySelector ('#amigo').value ='';
}; 

function sortearAmigo() {
if (amigos.length === 0) {
alert("No hay amigos disponibles para sortear.");
return;
}

let indiceAleatorio = Math.floor(Math.random() * amigos.length);

let nombreSorteado = amigos[indiceAleatorio][1];

let ulResultado = document.getElementById("resultado");
ulResultado.innerHTML = "";                    
ulResultado.innerHTML = `<li>${nombreSorteado}</li>`;
mostrarListaAmigos()

};

function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    if (amigos.length>0)
        for (let i = 0; i < amigos.length; i++) {
            lista.innerHTML += `<li>${amigos[i][1]}</li>`;
    } else {
        alert ("No hay amigos agreagdos")
    }
}
