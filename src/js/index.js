const botoes = document.querySelectorAll(".botao");
const princesas = document.querySelectorAll(".princesa");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarPrincesas();

		botao.classList.add("selecionado");
		princesas[indice].classList.add("selecionado");
	});
});

function desselecionarPrincesas() {
	const princesaSelecionado = document.querySelector(".princesa.selecionado");
	princesaSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}