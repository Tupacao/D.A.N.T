// Container topo da página, baseado na troca de cada elemento

function MudarCard(element) {
    let primario = document.getElementById("card-prymario");
    let aux = primario.getAttribute('src');
    let secundario = element;
    let aux2 = secundario.getAttribute('src');
    secundario.src = aux;
    primario.src = aux2;
}

const imagemESQ = document.querySelector('.container-carrosel .imagem-esq');
const imagensDIR = document.querySelector('.container-carrosel .imagem-dir')
const imagemContainer = [];
let imagemSTR = "";

for (let i = 0; i < 5; i++) {
    imagemContainer[i] = {
        src: "#",
        appid: i,
    };
}

imagemESQ.innerHTML = `<a href = "GamePage.html?id=${imagemContainer[0].appid}"><img src="${imagemContainer[0].src}" id="card-prymario" width="500px" height="400px"></a>`

for (let i = 1; i <= 4; i++) {
    imagemSTR+= `<a href"GamePage.html${imagemContainer[i].appid}"><div class = "card"><img src="${imagemContainer[i].src}" id="card-1" width="200px" height="100px" onclick="MudarCard(this)"> </div>`
}

imagensDIR.innerHTML = imagemSTR; 

// Barra de Categorias

const blocosDIV = document.getElementById('blocos');
const vetorClasse = [];
let blocoSTR = "";

for (let i = 0; i < 5; i++) {
    vetorClasse[i] = {
        href: "",
        categoria: `Categoria: ${i}`
    }
}

for (let i = 0; i < 5; i++) {
    blocoSTR +=
        `
    <div class="bloco">
        <h1><a href="#carrosel">${vetorClasse[i].categoria}</a></h1>
    </div>
    `
}

blocosDIV.innerHTML = blocoSTR;

// Containers do meio

const seta_esq = document.getElementById('seta-esq');
const seta_dir = document.getElementById('seta-dir');
const gameDIV = document.getElementById('jogos');
const data = [];


for (let i = 0; i <= 20; i++) {
    data[i] = {
        imgsrc: "",
        titulo: `titulo ${i}`,
        appid: i,
    }
}
let start = 0, end = 6;

vetor();

function vetor() {
    let str = "";
    for (let i = start; i < end; i++) {
        str += `
        <div class="content">
            <div class="game">
                <a href = "GamePage.html?appid=${data[i].appid}"> 
                    <img src="${data[i].imgsrc}" alt="" width="150px" height="200px">
                    <div class="name">
                        <h5>${data[i].titulo}</h5>
                    </div>
                </a>
            </div>
        </div>`;
    }
    
    gameDIV.innerHTML = str;
}


seta_dir.addEventListener("click", () => {
    if (end < data.length - 1) {
        start += 2;
        end += 2;
        vetor();
        console.log(end)
    }
})

seta_esq.addEventListener("click", () => {
    if (start >= 0) {
        start -= 2;
        end -= 2;
        vetor();
        console.log(end)
    }
})

// let number = 30350130
// let teste = `https://viacep.com.br/ws/${number}/json/`

// fetch(teste)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.bairro);
//     })