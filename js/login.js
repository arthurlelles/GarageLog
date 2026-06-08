const USUARIO = "admin";
const SENHA = "admin";

function entrar() {
    let usuarioDigitado = document.getElementById("usuario").value;
    let senhaDigitada = document.getElementById("senha").value;

    let mensagem = document.getElementById("mensagem");
    let linkGaragem = document.getElementById("link-garagem");

    if (usuarioDigitado === "" || senhaDigitada === "") {
        mensagem.style.color = "#c0392b";
        mensagem.innerHTML = "Preencha o usuário e a senha.";
        linkGaragem.style.display = "none";
    } else if (usuarioDigitado === USUARIO && senhaDigitada === SENHA) {
        mensagem.style.color = "#1e7e45";
        mensagem.innerHTML = "Login realizado com sucesso!";
        linkGaragem.style.display = "inline-block";
    } else {
        mensagem.style.color = "#c0392b";
        mensagem.innerHTML = "Usuário ou senha incorretos.";
        linkGaragem.style.display = "none";
    }
}
