var moeda = 0;
var mps = 0;
var clique = 1;
var entidadesQTD = [];
var entidadesValor = [];
var artefatosValor = [];

// Função para salvar as variáveis no cache do navegador
function salvarVariaveis() {
    localStorage.setItem("moeda", moeda);
    localStorage.setItem("mps", mps);
    localStorage.setItem("clique", clique);
    localStorage.setItem("entidadesQTD", entidadesQTD);
    localStorage.setItem("entidadesValor", entidadesValor);
    localStorage.setItem("artefatosValor", artefatosValor);
}

// Função para carregar as variáveis do cache do navegador
function carregarVariaveis() {
    moeda = parseFloat(localStorage.getItem("moeda")) || 0;
    mps = parseFloat(localStorage.getItem("mps")) || 0;
    clique = parseInt(localStorage.getItem("clique")) || 1;
    entidadesQTD = parseInt(localStorage.getItem("entidadesQTD")) || 0;
    entidadesValor = parseFloat(localStorage.getItem("entidadesValor")) || 0;
    artefatosValor = parseFloat(localStorage.getItem("artefatosValor")) || 0;
}

// Chamar a função para carregar as variáveis ao carregar a página
carregarVariaveis();
setInterval(atualizarValorMoeda, 1000);


function atualizarValorMoeda() {
    moeda += mps;
    document.getElementById("moeda").innerHTML = moeda.toFixed(2);
    document.getElementById("mps").innerHTML = mps.toFixed(2);
    salvarVariaveis(); // Salvar as variáveis após atualizar o valor da moeda
}

document.addEventListener("DOMContentLoaded", function () {
    var imagem = document.getElementById("moeda_antiga");
    imagem.addEventListener("click", clickar);

    entidadesQTD = [
        document.getElementById('qtd1').innerHTML,
        document.getElementById('qtd2').innerHTML,
        document.getElementById('qtd3').innerHTML,
        document.getElementById('qtd4').innerHTML,
        document.getElementById('qtd5').innerHTML,
        document.getElementById('qtd6').innerHTML,
        document.getElementById('qtd7').innerHTML,
        document.getElementById('qtd8').innerHTML,
        document.getElementById('qtd9').innerHTML,
        document.getElementById('qtd10').innerHTML,
    ]

    entidadesValor = [
        document.getElementById('valorCompra1'),
        document.getElementById('valorCompra2'),
        document.getElementById('valorCompra3'),
        document.getElementById('valorCompra4'),
        document.getElementById('valorCompra5'),
        document.getElementById('valorCompra6'),
        document.getElementById('valorCompra7'),
        document.getElementById('valorCompra8'),
        document.getElementById('valorCompra9'),
        document.getElementById('valorCompra10'),
    ]
    artefatosValor = [
        document.getElementById('valorCompra11'),
        document.getElementById('valorCompra22'),
        document.getElementById('valorCompra33'),
        document.getElementById('valorCompra44'),
        document.getElementById('valorCompra55'),
        document.getElementById('valorCompra66'),
        document.getElementById('valorCompra77'),
        document.getElementById('valorCompra88'),
        document.getElementById('valorCompra99'),
        document.getElementById('valorCompra1010'),
    ]
});

var aux = [];
var i = 0;

while(i < 10){

    aux[i] = parseInt(entidadesQTD[i]);
    
    i++;
}

function clickar() {
    //console.log("Clique na imagem detectado!");
    moeda = parseFloat(moeda + clique);
    document.getElementById("moeda").innerHTML = moeda.toFixed(2);
}

function atualizarEntidade(id) {
    if (id == "valorCompra1") {
        document.getElementById('divEntidade2').style.visibility = "visible";
    } else if (id == "valorCompra2") {
        document.getElementById('divEntidade3').style.visibility = "visible";
    } else if (id == "valorCompra3") {
        document.getElementById('divEntidade4').style.visibility = "visible";
    } else if (id == "valorCompra4") {
        document.getElementById('divEntidade5').style.visibility = "visible";
    } else if (id == "valorCompra5") {
        document.getElementById('divEntidade6').style.visibility = "visible";
    } else if (id == "valorCompra6") {
        document.getElementById('divEntidade7').style.visibility = "visible";
    } else if (id == "valorCompra7") {
        document.getElementById('divEntidade8').style.visibility = "visible";
    } else if (id == "valorCompra8") {
        document.getElementById('divEntidade9').style.visibility = "visible";
    } else if (id == "valorCompra8") {
        document.getElementById('divEntidade10').style.visibility = "visible";
    }
    if (id == "valorCompra11") {
        document.getElementById('divArtefato2').style.visibility = "visible";
    } else if (id == "valorCompra22") {
        document.getElementById('divArtefato3').style.visibility = "visible";
    } else if (id == "valorCompra33") {
        document.getElementById('divArtefato4').style.visibility = "visible";
    } else if (id == "valorCompra44") {
        document.getElementById('divArtefato5').style.visibility = "visible";
    } else if (id == "valorCompra55") {
        document.getElementById('divArtefato6').style.visibility = "visible";
    } else if (id == "valorCompra66") {
        document.getElementById('divArtefato7').style.visibility = "visible";
    } else if (id == "valorCompra77") {
        document.getElementById('divArtefato8').style.visibility = "visible";
    } else if (id == "valorCompra88") {
        document.getElementById('divArtefato9').style.visibility = "visible";
    } else if (id == "valorCompra99") {
        document.getElementById('divArtefato10').style.visibility = "visible";
    }
}

function atualizarMPS(id) {
    if (id == "valorCompra1") {
        mps += 0.1;
        document.getElementById("qtd1").innerHTML = parseInt(document.getElementById("qtd1").innerHTML) + 1;
        entidadesQTD[0] = parseInt(document.getElementById("qtd1").innerHTML)
    } else if (id == "valorCompra2") {
        mps += 1;
        document.getElementById("qtd2").innerHTML = parseInt(document.getElementById("qtd2").innerHTML) + 1;
        entidadesQTD[1] = parseInt(document.getElementById("qtd2").innerHTML)
    } else if (id == "valorCompra3") {
        mps += 10;
        document.getElementById("qtd3").innerHTML = parseInt(document.getElementById("qtd3").innerHTML) + 1;
        entidadesQTD[2] = parseInt(document.getElementById("qtd3").innerHTML)
    } else if (id == "valorCompra4") {
        mps += 100;
        document.getElementById("qtd4").innerHTML = parseInt(document.getElementById("qtd4").innerHTML) + 1;
        entidadesQTD[3] = parseInt(document.getElementById("qtd4").innerHTML)
    } else if (id == "valorCompra5") {
        mps += 1000;
        document.getElementById("qtd5").innerHTML = parseInt(document.getElementById("qtd5").innerHTML) + 1;
        entidadesQTD[4] = parseInt(document.getElementById("qtd5").innerHTML)
    } else if (id == "valorCompra6") {
        mps += 10000;
        document.getElementById("qtd6").innerHTML = parseInt(document.getElementById("qtd6").innerHTML) + 1;
        entidadesQTD[5] = parseInt(document.getElementById("qtd6").innerHTML)
    } else if (id == "valorCompra7") {
        mps += 100000;
        document.getElementById("qtd7").innerHTML = parseInt(document.getElementById("qtd7").innerHTML) + 1;
        entidadesQTD[6] = parseInt(document.getElementById("qtd7").innerHTML)
    } else if (id == "valorCompra8") {
        mps += 1000000;
        document.getElementById("qtd8").innerHTML = parseInt(document.getElementById("qtd8").innerHTML) + 1;
        entidadesQTD[7] = parseInt(document.getElementById("qtd8").innerHTML)
    } else if (id == "valorCompra9") {
        mps += 10000000;
        document.getElementById("qtd9").innerHTML = parseInt(document.getElementById("qtd9").innerHTML) + 1;
        entidadesQTD[8] = parseInt(document.getElementById("qtd9").innerHTML)
    } else if (id == "valorCompra10") {
        mps += 100000000;
        document.getElementById("qtd10").innerHTML = parseInt(document.getElementById("qtd10").innerHTML) + 1;
        entidadesQTD[9] = parseInt(document.getElementById("qtd10").innerHTML)
    }
    document.getElementById("mps").innerHTML = mps.toFixed(2);
}

function atualizarValorCompra(id) {
    var elementoValor = document.getElementById(id);
    var valorAtual = parseFloat(elementoValor.innerText);
    if (valorAtual <= moeda) {
        //console.log("entrou!");
        var novoValor = valorAtual * 1.1;
        elementoValor.innerText = novoValor.toFixed(2);
        moeda -= valorAtual;
        atualizarMPS(id);
        atualizarEntidade(id);
    }
}

function atualizarArtefato(id) {
    var elementoValor = document.getElementById(id);
    var valorAtual = parseFloat(elementoValor.innerText);
    if (valorAtual <= moeda) {
        //console.log("entrou!");

        atualizarEntidade(id);
        if (id == "valorCompra11" && !(elementoValor.innerText == "Comprado")) {
            clique += 1;
            elementoValor.innerText = "Comprado";
            moeda -= valorAtual;
        } else if (id == "valorCompra22" && !(elementoValor.innerText == "Comprado")) {
            clique += 10;
            elementoValor.innerText = "Comprado";
            moeda -= valorAtual;
        } else if (id == "valorCompra33" && !(elementoValor.innerText == "Comprado")) {
            clique += 100;
            elementoValor.innerText = "Comprado";
            moeda -= valorAtual;
        } else if (id == "valorCompra44" && !(elementoValor.innerText == "Comprado")) {
            clique += 1000;
            elementoValor.innerText = "Comprado";
            moeda -= valorAtual;
        } else if (id == "valorCompra55" && !(elementoValor.innerText == "Comprado")) {
            clique += 10000;
            elementoValor.innerText = "Comprado";
            moeda -= valorAtual;
        } else if (id == "valorCompra66" && !(elementoValor.innerText == "Comprado")) {
            clique += 100000;
            elementoValor.innerText = "Comprado";
            moeda -= valorAtual;
        } else if (id == "valorCompra77" && !(elementoValor.innerText == "Comprado")) {
            clique += 1000000;
            elementoValor.innerText = "Comprado";
            moeda -= valorAtual;
        } else if (id == "valorCompra88" && !(elementoValor.innerText == "Comprado")) {
            clique += 10000000;
            elementoValor.innerText = "Comprado";
            moeda -= valorAtual;
        } else if (id == "valorCompra99" && !(elementoValor.innerText == "Comprado")) {
            clique += 100000000;
            elementoValor.innerText = "Comprado";
            moeda -= valorAtual;
        } else if (id == "valorCompra1010" && !(elementoValor.innerText == "Comprado")) {
            clique += 1000000000;
            elementoValor.innerText = "Comprado";
            moeda -= valorAtual;
        }
    }
}

//Página missoes----------------------------------------------------------------

function concluirMissao(id) {
    var elementoValor = document.getElementById(id);
    var valorAtual = parseFloat(elementoValor.innerText);
    if (id == "missao1" && !(elementoValor.innerText == "Concluido")) {
        mps += 100
        elementoValor.innerText = "Concluido";
    } else if (id == "missao2" && !(elementoValor.innerText == "Concluido")) {
        mps += 1000
        elementoValor.innerText = "Concluido";
    } else if (id == "missao3" && !(elementoValor.innerText == "Concluido")) {
        mps += 10000
        elementoValor.innerText = "Concluido";
    }
}