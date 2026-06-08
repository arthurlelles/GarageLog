let modeloCarro = [];
let anoCarro = [];
let placaCarro = [];
let kmCarro = [];
let proximaCarro = [];
let fipeCarro = [];

modeloCarro[1] = "BMW M3 E30"; anoCarro[1] = "1990"; placaCarro[1] = "ABC-1234"; kmCarro[1] = 85000; proximaCarro[1] = 85000; fipeCarro[1] = 120000;
modeloCarro[2] = "BMW M3 E36"; anoCarro[2] = "1997"; placaCarro[2] = "DEF-5678"; kmCarro[2] = 142000; proximaCarro[2] = 143000; fipeCarro[2] = 90000;
modeloCarro[3] = "BMW M3 E46"; anoCarro[3] = "2005"; placaCarro[3] = "GHI-9012"; kmCarro[3] = 67000; proximaCarro[3] = 75000; fipeCarro[3] = 150000;

let contadorCarro = 4;
let carroEmEdicao = 0;
let linhaEmEdicao = null;


function mostrarFormCarro() {
    carroEmEdicao = 0;
    document.getElementById("titulo-form-carro").innerHTML = "Adicionar Carro";
    limparFormCarro();
    document.getElementById("form-carro").style.display = "block";
}

function esconderFormCarro() {
    document.getElementById("form-carro").style.display = "none";
    document.getElementById("mensagem-carro").innerHTML = "";
}

function limparFormCarro() {
    document.getElementById("c-modelo").value = "";
    document.getElementById("c-ano").value = "";
    document.getElementById("c-placa").value = "";
    document.getElementById("c-km").value = "";
    document.getElementById("c-proxima").value = "";
    document.getElementById("c-fipe").value = "";
}

function montarInfo(i) {
    return "<h3>" + modeloCarro[i] + "</h3>" +
        "<p>Ano: " + anoCarro[i] + "</p>" +
        "<p>Placa: " + placaCarro[i] + "</p>" +
        "<p>KM: " + kmCarro[i] + "</p>" +
        "<p>Valor FIPE: R$ " + fipeCarro[i] + "</p>" +
        '<p class="alerta-revisao" id="alerta' + i + '" style="display: none;"></p>';
}

function montarCardInner(n) {
    return '<div class="card-top">' +
            '<img src="img/garage.jpeg" alt="' + modeloCarro[n] + '">' +
            '<div class="card-info" id="info' + n + '">' + montarInfo(n) + '</div>' +
        '</div>' +
        '<div class="card-actions" id="acoes' + n + '">' +
            '<button class="btn btn-small" onclick="alternarManutencoes(' + n + ')">Manutenções</button> ' +
            '<button class="btn btn-small btn-outline" onclick="editarCarro(' + n + ')">Editar</button> ' +
            '<button class="btn btn-small btn-danger" onclick="pedirConfirmacao(' + n + ')">Excluir</button>' +
        '</div>' +
        '<div class="confirmacao" id="confirm' + n + '" style="display: none;">' +
            '<p>Tem certeza que deseja excluir este carro?</p>' +
            '<button class="btn btn-small btn-danger" onclick="confirmarExclusao(' + n + ')">Sim, excluir</button> ' +
            '<button class="btn btn-small btn-outline" onclick="cancelarExclusao(' + n + ')">Cancelar</button>' +
        '</div>' +
        '<div class="bloco-manutencoes" id="bloco' + n + '">' +
            '<div class="table-wrapper"><table>' +
                '<thead><tr><th>Data</th><th>Tipo</th><th>Descrição</th><th>KM</th><th>Valor</th><th>Ações</th></tr></thead>' +
                '<tbody id="corpo' + n + '"></tbody>' +
            '</table></div>' +
            '<div class="total-box">Total gasto: <b id="total' + n + '">R$ 0</b></div>' +
            '<button class="btn btn-small" onclick="mostrarFormManut(' + n + ')">+ Registrar Manutenção</button>' +
            '<div class="form-manut" id="formmanut' + n + '">' +
                '<h4 id="tituloman' + n + '">Registrar Manutenção</h4>' +
                '<div class="form-group"><label>Data</label><input type="text" id="m-data' + n + '" placeholder="dd/mm/aaaa"></div>' +
                '<div class="form-group"><label>Tipo</label><input type="text" id="m-tipo' + n + '"></div>' +
                '<div class="form-group"><label>Descrição</label><input type="text" id="m-descricao' + n + '"></div>' +
                '<div class="form-group"><label>KM</label><input type="text" id="m-km' + n + '"></div>' +
                '<div class="form-group"><label>Valor (R$)</label><input type="number" id="m-valor' + n + '"></div>' +
                '<button class="btn" onclick="salvarManutencao(' + n + ')">Salvar</button> ' +
                '<button class="btn btn-outline" onclick="esconderFormManut(' + n + ')">Cancelar</button>' +
                '<div id="msgman' + n + '"></div>' +
            '</div>' +
        '</div>';
}

function editarCarro(i) {
    carroEmEdicao = i;
    document.getElementById("c-modelo").value = modeloCarro[i];
    document.getElementById("c-ano").value = anoCarro[i];
    document.getElementById("c-placa").value = placaCarro[i];
    document.getElementById("c-km").value = kmCarro[i];
    document.getElementById("c-proxima").value = proximaCarro[i];
    document.getElementById("c-fipe").value = fipeCarro[i];
    document.getElementById("titulo-form-carro").innerHTML = "Editar Carro";
    document.getElementById("form-carro").style.display = "block";
}

function salvarCarro() {
    let modelo = document.getElementById("c-modelo").value;
    let ano = document.getElementById("c-ano").value;
    let placa = document.getElementById("c-placa").value;
    let km = document.getElementById("c-km").value;
    let proxima = document.getElementById("c-proxima").value;
    let fipe = document.getElementById("c-fipe").value;

    let msg = document.getElementById("mensagem-carro");

    if (modelo === "" || ano === "" || placa === "" || km === "" || proxima === "" || fipe === "") {
        msg.style.color = "#c0392b";
        msg.innerHTML = "Preencha todos os campos do carro.";
        return;
    }

    if (carroEmEdicao === 0) {
        let n = contadorCarro;
        contadorCarro = contadorCarro + 1;

        modeloCarro[n] = modelo;
        anoCarro[n] = ano;
        placaCarro[n] = placa;
        kmCarro[n] = parseFloat(km);
        proximaCarro[n] = parseFloat(proxima);
        fipeCarro[n] = fipe;

        let card = document.createElement("div");
        card.className = "card";
        card.id = "carro" + n;
        card.innerHTML = montarCardInner(n);

        document.getElementById("cards").appendChild(card);
        calcularTotalCarro(n);
        definirAlerta(n);
    } else {
        let i = carroEmEdicao;
        modeloCarro[i] = modelo;
        anoCarro[i] = ano;
        placaCarro[i] = placa;
        kmCarro[i] = parseFloat(km);
        proximaCarro[i] = parseFloat(proxima);
        fipeCarro[i] = fipe;
        document.getElementById("info" + i).innerHTML = montarInfo(i);
        definirAlerta(i);
    }

    esconderFormCarro();
}


function pedirConfirmacao(i) {
    document.getElementById("acoes" + i).style.display = "none";
    document.getElementById("confirm" + i).style.display = "block";
}

function cancelarExclusao(i) {
    document.getElementById("confirm" + i).style.display = "none";
    document.getElementById("acoes" + i).style.display = "block";
}

function confirmarExclusao(i) {
    let cards = document.getElementById("cards");
    cards.removeChild(document.getElementById("carro" + i));
}


function alternarManutencoes(i) {
    let bloco = document.getElementById("bloco" + i);
    if (bloco.style.display === "block") {
        bloco.style.display = "none";
    } else {
        bloco.style.display = "block";
    }
}

function mostrarFormManut(i) {
    linhaEmEdicao = null;
    document.getElementById("tituloman" + i).innerHTML = "Registrar Manutenção";
    limparFormManut(i);
    document.getElementById("formmanut" + i).style.display = "block";
}

function esconderFormManut(i) {
    document.getElementById("formmanut" + i).style.display = "none";
    document.getElementById("msgman" + i).innerHTML = "";
}

function limparFormManut(i) {
    document.getElementById("m-data" + i).value = "";
    document.getElementById("m-tipo" + i).value = "";
    document.getElementById("m-descricao" + i).value = "";
    document.getElementById("m-km" + i).value = "";
    document.getElementById("m-valor" + i).value = "";
}

function montarLinhaManut(data, tipo, descricao, km, valor, i) {
    return "<td>" + data + "</td>" +
        "<td>" + tipo + "</td>" +
        "<td>" + descricao + "</td>" +
        "<td>" + km + "</td>" +
        '<td data-valor="' + valor + '">R$ ' + valor + "</td>" +
        '<td><button class="btn btn-small btn-outline" onclick="editarManutencao(this,' + i + ')">Editar</button> ' +
        '<button class="btn btn-small btn-danger" onclick="excluirManutencao(this,' + i + ')">Excluir</button></td>';
}

function salvarManutencao(i) {
    let data = document.getElementById("m-data" + i).value;
    let tipo = document.getElementById("m-tipo" + i).value;
    let descricao = document.getElementById("m-descricao" + i).value;
    let km = document.getElementById("m-km" + i).value;
    let valor = document.getElementById("m-valor" + i).value;

    let msg = document.getElementById("msgman" + i);

    if (data === "" || tipo === "" || descricao === "" || km === "" || valor === "") {
        msg.style.color = "#c0392b";
        msg.innerHTML = "Preencha todos os campos da manutenção.";
        return;
    }

    if (linhaEmEdicao === null) {
        let linha = document.createElement("tr");
        linha.innerHTML = montarLinhaManut(data, tipo, descricao, km, valor, i);
        document.getElementById("corpo" + i).appendChild(linha);
    } else {
        linhaEmEdicao.innerHTML = montarLinhaManut(data, tipo, descricao, km, valor, i);
        linhaEmEdicao = null;
    }

    esconderFormManut(i);
    calcularTotalCarro(i);
}

function editarManutencao(botao, i) {
    let linha = botao.parentElement.parentElement;
    linhaEmEdicao = linha;
    let celulas = linha.cells;
    document.getElementById("m-data" + i).value = celulas[0].innerHTML;
    document.getElementById("m-tipo" + i).value = celulas[1].innerHTML;
    document.getElementById("m-descricao" + i).value = celulas[2].innerHTML;
    document.getElementById("m-km" + i).value = celulas[3].innerHTML;
    document.getElementById("m-valor" + i).value = celulas[4].getAttribute("data-valor");
    document.getElementById("tituloman" + i).innerHTML = "Editar Manutenção";
    document.getElementById("formmanut" + i).style.display = "block";
}

function excluirManutencao(botao, i) {
    let linha = botao.parentElement.parentElement;
    linha.remove();
    calcularTotalCarro(i);
}

function calcularTotalCarro(i) {
    let linhas = document.getElementById("corpo" + i).rows;
    let total = 0;
    for (let k = 0; k < linhas.length; k++) {
        total = total + parseFloat(linhas[k].cells[4].getAttribute("data-valor"));
    }
    document.getElementById("total" + i).innerHTML = "R$ " + total;
}


function definirAlerta(i) {
    let kmAtual = kmCarro[i];
    let proxima = proximaCarro[i];
    let alerta = document.getElementById("alerta" + i);

    if (kmAtual >= proxima) {
        alerta.innerHTML = "⚠ Revisão atrasada";
        alerta.style.display = "block";
    } else if (kmAtual >= proxima - 2000) {
        alerta.innerHTML = "⚠ Revisão se aproximando";
        alerta.style.display = "block";
    } else {
        alerta.style.display = "none";
    }
}


function iniciar() {
    for (let i = 1; i <= 3; i++) {
        calcularTotalCarro(i);
        definirAlerta(i);
    }
}

iniciar();
