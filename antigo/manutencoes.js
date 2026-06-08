// Mostrar / esconder o formulário (Aula 07 - ocultar e exibir elemento)
function mostrarFormulario() {
    document.getElementById("form-manutencao").style.display = "block";
}

function esconderFormulario() {
    document.getElementById("form-manutencao").style.display = "none";
    document.getElementById("mensagem").innerHTML = "";
}

// Adicionar uma manutenção: cria uma nova linha na tabela (Aula 07 - criar e adicionar elemento)
function adicionarManutencao() {
    let data = document.getElementById("data").value;
    let tipo = document.getElementById("tipo").value;
    let descricao = document.getElementById("descricao").value;
    let km = document.getElementById("km").value;
    let valor = document.getElementById("valor").value;

    let mensagem = document.getElementById("mensagem");

    // Validação com if/else (Aula 08)
    if (data === "" || tipo === "" || descricao === "" || km === "" || valor === "") {
        mensagem.className = "mensagem mensagem-erro";
        mensagem.innerHTML = "Preencha todos os campos da manutenção.";
        return;
    }

    // Cria a nova linha da tabela (Aula 07)
    let linha = document.createElement("tr");
    linha.innerHTML =
        "<td>" + data + "</td>" +
        "<td>" + tipo + "</td>" +
        "<td>" + descricao + "</td>" +
        "<td>" + km + "</td>" +
        '<td data-valor="' + valor + '">R$ ' + valor + "</td>" +
        '<td><button class="btn btn-small btn-danger" onclick="excluirManutencao(this)">Excluir</button></td>';

    // Adiciona a linha no corpo da tabela (Aula 07 - appendChild)
    document.getElementById("corpo-tabela").appendChild(linha);

    // Limpa os campos, esconde o formulário e recalcula o total
    document.getElementById("data").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("km").value = "";
    document.getElementById("valor").value = "";
    esconderFormulario();
    calcularTotal();
}

// Excluir uma manutenção: remove a linha e recalcula o total (Aula 07)
function excluirManutencao(botao) {
    // botão -> td -> tr
    let linha = botao.parentElement.parentElement;
    linha.remove();
    calcularTotal();
}

// Calcula o total gasto somando os valores com um laço de repetição (Aulas 08 e 09)
function calcularTotal() {
    let linhas = document.getElementById("corpo-tabela").rows;
    let total = 0;

    // Percorre cada linha e soma o valor (for - Aula 09 / parseFloat - Aula 08)
    for (let i = 0; i < linhas.length; i++) {
        let celulaValor = linhas[i].cells[4];
        total = total + parseFloat(celulaValor.getAttribute("data-valor"));
    }

    // Mostra o total formatado em reais (Aula 07 - innerHTML)
    document.getElementById("total").innerHTML = "R$ " + total.toFixed(2).replace(".", ",");
}

// Calcula o total assim que a página carrega
calcularTotal();
