function gerarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById("resultado").textContent = `Número gerado: ${numeroAleatorio}`;
}
