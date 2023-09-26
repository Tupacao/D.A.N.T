// Container topo da página, baseado na troca de cada elemento

function MudarCard(element) {
    let primario = document.getElementById("card-prymario");
    let aux = primario.getAttribute('src');
    let secundario = element;
    let aux2 = secundario.getAttribute('src');
    secundario.src = aux;
    primario.src = aux2;
}

// Classificações

const blocosDIV = document.getElementById('blocos');

let vetorClasse [];

// <div class="bloco">
//                     <h1><a href="">NADA</a></h1>
//                 </div>

for (let i = 0; i < 5; i++) {
    vetorClasse[i] = {
        href: "",
        categoria: `Categoria: ${i}`
    }
}







// Containers do meio

const seta_esq = document.getElementById('seta-esq');
const seta_dir = document.getElementById('seta-dir');
const gameDIV = document.getElementById('jogos');

let data = [];

for (let i = 0; i <= 20; i++) {
    data[i] = {
        imgsrc: "",
        titulo: `titulo ${i}`,
    }
}
let start = 0, end = 6;

function vetor (){
    let str = "";
    for (let i = start; i < end; i++) {
        str += `<div class="content">
            <div class="game">
                <img src="${data[i].imgsrc}" alt="" width="150px" height="200px">
                <div class="name">
                    <h5>${data[i].titulo}</h5>
                </div>
            </div>
        </div>`;
    }

    gameDIV.innerHTML = str;
    gameDIV.style.transition = "all 2s";
}


seta_dir.addEventListener("click", () => {
    if(end < data.length - 1){
        start+=2;
        end+=2;
        vetor();
        console.log(end)
    }
})

seta_esq.addEventListener("click", () => {
    if(start >= 0){
        start-=2;
        end-=2;
        vetor();
        console.log(end)
    }
})