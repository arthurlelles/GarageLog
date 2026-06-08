let modelos = ["BMW M3 E30", "BMW M3 E36", "BMW M3 E46"];
let gastos = [2170, 3600, 2300];
let manutencoes = [3, 2, 2];
let kms = [85000, 142000, 67000];
let fipe = [120000, 90000, 150000];

let contador = modelos.length;

let totalGasto = 0;
let kmTotais = 0;
let valorGaragem = 0;
for (let i = 0; i < modelos.length; i++) {
    totalGasto = totalGasto + gastos[i];
    kmTotais = kmTotais + kms[i];
    valorGaragem = valorGaragem + fipe[i];
}

let indiceMaiorGasto = 0;
for (let i = 1; i < gastos.length; i++) {
    if (gastos[i] > gastos[indiceMaiorGasto]) {
        indiceMaiorGasto = i;
    }
}

let indiceMaisManut = 0;
for (let i = 1; i < manutencoes.length; i++) {
    if (manutencoes[i] > manutencoes[indiceMaisManut]) {
        indiceMaisManut = i;
    }
}

document.getElementById("stat-contador").innerHTML = contador;
document.getElementById("stat-total").innerHTML = "R$ " + totalGasto;
document.getElementById("stat-km").innerHTML = kmTotais + " km";
document.getElementById("stat-fipe").innerHTML = "R$ " + valorGaragem;

document.getElementById("stat-maior-gasto").innerHTML = modelos[indiceMaiorGasto];
document.getElementById("stat-maior-gasto-det").innerHTML = "R$ " + gastos[indiceMaiorGasto] + " em manutenções";

document.getElementById("stat-mais-manut").innerHTML = modelos[indiceMaisManut];
document.getElementById("stat-mais-manut-det").innerHTML = manutencoes[indiceMaisManut] + " manutenções registradas";
