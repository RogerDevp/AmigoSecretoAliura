let amigos = [];

function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if(nombre !== ""){
        amigos.push(nombre);
        document.getElementById("listaAmigos").innerHTML += `<li>${nombre}</li>`;
        input.value = "";
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Agrega al menos un nombre.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const nombreElegido = amigos[indice];

    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${nombreElegido}`;
    limpiarLista();
}


function limpiarLista() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}