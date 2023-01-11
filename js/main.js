//Pega pelo atributo de dado
const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");

const listaPecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


//Irá percorrer cada dado do const "controle"
controle.forEach( (elemento) => {
    //Irá adicionar uma função tipo "click" em cada elemento
    elemento.addEventListener("click", (evento) => {
        //Evento = quando clica
        //Chama a função "manipulaDados" com 2 parâmentros (o atributo de dado e classe pai do controle)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        AtualizaEstatistica(evento.target.dataset.peca);
        //evento.target.dataset.peca -> vê o valor do data-peca no HTML
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}

function AtualizaEstatistica(peca){ 
    estatistica.forEach( (elemento) => {
        //elemento.textContent -> Cada atributo do robô (os números)
        //parseInt(elemento.textContent) -> Transforma em int para ser somado
        //listaPecas[peca][elemento.dataset.estatistica] -> Pega o valor do atributo (velocidade, força...) da peça 
        elemento.textContent = parseInt(elemento.textContent) + listaPecas[peca][elemento.dataset.estatistica];
    })
}

