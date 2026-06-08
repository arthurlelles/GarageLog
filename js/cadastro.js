function criarConta() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmar-senha").value;

    let mensagem = document.getElementById("mensagem");
    let linkGaragem = document.getElementById("link-garagem");

    if (senha.length < 4) {
        mensagem.style.color = "#c0392b";
        mensagem.innerHTML = "A senha deve ter pelo menos 4 caracteres.";
        linkGaragem.style.display = "none";
    } else if (senha !== confirmarSenha) {
        mensagem.style.color = "#c0392b";
        mensagem.innerHTML = "As senhas não conferem.";
        linkGaragem.style.display = "none";
    } else {
        mensagem.style.color = "#1e7e45";
        mensagem.innerHTML = "Conta criada com sucesso, " + nome + "!";
        linkGaragem.style.display = "inline-block";
    }
}
