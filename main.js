const btnAdicionar = document.querySelector("#adicionar-item");
const btnEditar = document.querySelector("#editar-item");
const btnExcluir = document.querySelector("#excluir-item");
const listaItens = document.querySelector("#itens-cardapio");

btnAdicionar.addEventListener("click", function () {
  const novoItem = document.querySelector("#novo-item").value.trim();
  const diaSemana = document.querySelector("#dia-semana").value;

  if (novoItem === "") {
    alert("Por favor, digite um item para adicionar.");
    return;
  }

  const itemLi = document.createElement("li");
  itemLi.innerText = `${diaSemana} - ${novoItem}`;

  listaItens.appendChild(itemLi);
});

btnEditar.addEventListener("click", function () {
  const itemSelecionado = listaItens.querySelector(".selecionado");

  if (itemSelecionado) {
    const textoItem = itemSelecionado.innerText;
    const novoTexto = prompt("Digite o novo texto do item:", textoItem);

    if (novoTexto !== null) {
      itemSelecionado.innerText = novoTexto;
    }
  }
});

btnExcluir.addEventListener("click", function () {
  const itemSelecionado = listaItens.querySelector(".selecionado");

  if (itemSelecionado) {
    listaItens.removeChild(itemSelecionado);
  }
});

listaItens.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    const itemLi = event.target;
    const listaItens = itemLi.parentNode;
    const itens = listaItens.querySelectorAll("li");

    for (const item of itens) {
      item.classList.remove("selecionado");
    }

    itemLi.classList.add("selecionado");
  }
});

const resultado = document.querySelector("#resultado");
const btn_calcular = document.querySelector("#calcular-imc");

btn_calcular.addEventListener("click", function () {
  const peso = parseFloat(document.querySelector("#peso").value);
  const altura = parseFloat(document.querySelector("#altura").value);

  let result = peso / (altura * altura);
  alert(result);
  resultado.innerText = `O resultado do imc é: ${result}`;
});
