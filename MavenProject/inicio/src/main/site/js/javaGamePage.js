function MudarCard(element) {
    let primario = document.getElementById("card-primario");
    let aux = primario.getAttribute('src');
    let secundario = element;
    let aux2 = secundario.getAttribute('src');
    secundario.src = aux;
    primario.src = aux2;
}

const rosto = document.querySelector(".forum i");
let contador = 0;

rosto.addEventListener("click", () => {

    const game = document.querySelector(".container-dados");
    const forum = document.querySelector(".container-forum");

    if(contador == 0){
        game.style.display = "none";
        forum.style.display = "flex";
        contador++;
    }
    else{
        game.style.display = "block";
        forum.style.display = "none";
        contador--;
    }
    
});

const upper_vote = document.getElementById("upper");
const down_vote = document.getElementById("down");
let number = document.querySelector(".number");
let valor = 0;

upper_vote.addEventListener("click", () => {
    if(upper_vote.classList[3] != "verde"){
        if(down_vote.classList[3] == "vermelho"){
            valor+=1;
            if (valor < 10) {
                number.innerHTML = "0" + "" +valor;
            }
            else{
                number.innerHTML = valor;
            }
            upper_vote.style.color = "green";
            upper_vote.classList.add("verde");
            down_vote.classList.remove("vermelho");
            down_vote.style.color = "black";
        }
        else{
            valor++;
            if (valor < 10) {
                number.innerHTML = "0" + "" +valor;
            }
            else{
                number.innerHTML = valor;
            }
            upper_vote.style.color = "green";
            upper_vote.classList.add("verde");
        }
    }
    else{
        upper_vote.style.color = "black";
        valor--;
        if (valor < 10) {
            number.innerHTML = "0" + "" +valor;
        }
        else{
            number.innerHTML = valor;
        }
        upper_vote.classList.remove("verde");
    }
})

down_vote.addEventListener("click", () => {
    if(down_vote.classList[3] != "vermelho"){
        if(upper_vote.classList[3] == "verde"){
            if(valor > 0){
                valor-=1;
                if (valor < 10) {
                    number.innerHTML = "0" + "" +valor;
                }
                else{
                    number.innerHTML = valor;
                }
                down_vote.style.color = "red";
                down_vote.classList.add("vermelho");
                upper_vote.classList.remove("verde");
                upper_vote.style.color = "black";
            }
        }
        else{
            if(valor > 0){
                valor--;
                if (valor < 10) {
                    number.innerHTML = "0" + "" +valor;
                }
                else{
                    number.innerHTML = valor;
                }
                down_vote.style.color = "red";
                down_vote.classList.add("vermelho");
            }
        }
    }else{
        down_vote.style.color = "black";
        if (valor > 0) {
            valor++;
            if (valor < 10) {
                number.innerHTML = "0" + "" +valor;
            }
            else{
                number.innerHTML = valor;
            }
        }
        down_vote.classList.remove("vermelho");
    }
})