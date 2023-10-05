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

// FORUM

const rosto = document.querySelector(".forum i");
let contador = 0;
let userComent = [];

for (let i = 0; i < 5; i++) {
    userComent[i] = {
        number: i,
        comentario: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, excepturi harum maxime esse illo sequi fugit consequuntur tempora! Vitae, aliquid.",
    }
}


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

function comentarios () {
   const inserirComentario = document.querySelector(".container-comentario");
    let comentarios = "";

    for (let i = 0; i < 5; i++) {
        comentarios+= `
        <div class="comentario">
            <div class="container">
                <div class="imagem">
                    <i class="fa-solid fa-user fa-2xl"></i>
                </div>
                <div class="upvote">
                    <i class="fa-solid fa-arrow-up fa-xl" id="upper"></i>
                    <h4 class="number"> ${userComent[i].number} </h4>
                    <i class="fa-solid fa-arrow-down fa-xl" id="down"></i>
                </div>
            </div>
            <div class="comment">
                <h3>${userComent[i].comentario}</h3>
            </div>
        </div>
        `        
    }

    inserirComentario.innerHTML = comentarios;

}

// Up e Down vote

const upper_vote = document.getElementById("upper");
const down_vote = document.getElementById("down");
let number = document.querySelector(".number");
let valor = 0;

upper_vote.addEventListener("click", () => {
    if (upper_vote.classList[3] != "verde") {
        if (down_vote.classList[3] == "vermelho") {
            valor += 1;
            if (valor < 10) {
                number.innerHTML = "0" + "" + valor;
            }
            else {
                number.innerHTML = valor;
            }
            upper_vote.style.color = "green";
            upper_vote.classList.add("verde");
            down_vote.classList.remove("vermelho");
            down_vote.style.color = "black";
        }
        else {
            valor++;
            if (valor < 10) {
                number.innerHTML = "0" + "" + valor;
            }
            else {
                number.innerHTML = valor;
            }
            upper_vote.style.color = "green";
            upper_vote.classList.add("verde");
        }
    }
    else {
        upper_vote.style.color = "black";
        valor--;
        if (valor < 10) {
            number.innerHTML = "0" + "" + valor;
        }
        else {
            number.innerHTML = valor;
        }
        upper_vote.classList.remove("verde");
    }
})

down_vote.addEventListener("click", () => {
    if (down_vote.classList[3] != "vermelho") {
        if (upper_vote.classList[3] == "verde") {
            if (valor > 0) {
                valor -= 1;
                if (valor < 10) {
                    number.innerHTML = "0" + "" + valor;
                }
                else {
                    number.innerHTML = valor;
                }
                down_vote.style.color = "red";
                down_vote.classList.add("vermelho");
                upper_vote.classList.remove("verde");
                upper_vote.style.color = "black";
            }
        }
        else {
            if (valor > 0) {
                valor--;
                if (valor < 10) {
                    number.innerHTML = "0" + "" + valor;
                }
                else {
                    number.innerHTML = valor;
                }
                down_vote.style.color = "red";
                down_vote.classList.add("vermelho");
            }
        }
    } else {
        down_vote.style.color = "black";
        if (valor > 0) {
            valor++;
            if (valor < 10) {
                number.innerHTML = "0" + "" + valor;
            }
            else {
                number.innerHTML = valor;
            }
        }
        down_vote.classList.remove("vermelho");
    }
})