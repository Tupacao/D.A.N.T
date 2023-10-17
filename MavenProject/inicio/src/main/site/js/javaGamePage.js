const url = document.location.search;
const searchURL = new URLSearchParams(url);
let appid = searchURL.get('appid');
appid = parseInt(appid);

function MudarCard(element) {
    let primario = document.getElementById("card-primario");
    let aux = primario.getAttribute('src');
    let secundario = element;
    let aux2 = secundario.getAttribute('src');
    secundario.src = aux;
    primario.src = aux2;
}

// carrousel imagens

const dataImage = [];
let strBAIXO = "";

for (let i = 0; i < 4; i++) {
    dataImage[i] = "#";
}

const cima = document.querySelector(".cima");
const baixo = document.querySelector(".baixo");

cima.innerHTML = `<img src="${dataImage[0]}" width="100%" height="400px" id="card-primario">`

for (let i = 1; i <= 3; i++) {
    strBAIXO += `
    <div class="card">
        <img src="${dataImage[i]}" width="100%" height="100px" onclick="MudarCard(this)">
    </div>
    `
}

baixo.innerHTML = strBAIXO;

// abrir e fechar comentários

const rosto = document.querySelector(".forum i");
let contador = 0;

rosto.addEventListener("click", () => {

    const game = document.querySelector(".container-dados");
    const forum = document.querySelector(".container-forum");

    if (contador == 0) {
        game.style.display = "none";
        forum.style.display = "flex";
        contador++;
        comentarios()
    }
    else {
        game.style.display = "block";
        forum.style.display = "none";
        contador--;
    }

});

// abrir e fechar os subcomentarios

const respotas = document.querySelectorAll(".respostas h6");

respotas.forEach(resp => {
    
    resp.addEventListener("click", () => {
        if(resp.classList == "open"){
            resp.classList.remove("open");
            const campo_preencher = document.querySelectorAll(".campo_preencher");
            campo_preencher.forEach(element => {
                element.style.display = "none";
            });
        }
        else{ 
            resp.classList.add("open");
            const campo_preencher = document.querySelectorAll(".campo_preencher");
            campo_preencher.forEach(element => {
                element.style.display = "block";
            });
        }
    })
});

// Comentários

const abrir_mais = document.querySelectorAll(".abrir");

abrir_mais.forEach(abrir => {
    abrir.addEventListener("click", () => {
        if (abrir.classList[1] == "open") {
            abrir.classList.remove("open");
            let comentarios = document.querySelectorAll(".comment-inside");
            comentarios.forEach(coment => {
                coment.style.display = "none";
            });
        }
        else{
            abrir.classList.add("open");
            let comentarios = document.querySelectorAll(".comment-inside");
            comentarios.forEach(coment => {
                coment.style.display = "flex";
            });
        }
    })
});
