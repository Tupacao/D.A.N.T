// Container topo da página, baseado na troca de cada elemento

function MudarCard(element){
    let primario = document.getElementById("card-prymario");
    let aux = primario.getAttribute('src');
    let secundario = element;
    let aux2 = secundario.getAttribute('src');
    secundario.src = aux;
    primario.src = aux2;
}

// Containers do meio
