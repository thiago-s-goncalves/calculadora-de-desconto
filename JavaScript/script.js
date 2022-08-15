/* 	
let preco = 415
let desconto = 2;

var	valorFinal = preco - (preco / 100 * desconto);

console.log(valorFinal); */

let inputPreco = document.getElementById("preco");
let inputDesconto = document.getElementById("desconto");

let resultado = document.getElementById("resultado");

function calcular() {

    let preco = inputPreco.value;
    let desconto = inputDesconto.value;

    let precoFinal = preco - (preco / 100 * desconto);

    resultado.innerHTML = `Preço final é:<br> R$${(precoFinal.toFixed(2))}`

}