let amigos = [];

//Altera a mensagem de algum elemento
function alterarMensagem(idElemento, novaMensagem) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = novaMensagem;
}
// Limpa o campo selecionado
function limparCampo(id) {
    campo = document.getElementById(id);
    campo.value = "";
    
}


let regex = /[a-zA-Z]/;

//Verifica ser o "amigo" é válido e o adiciona a lista
function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();
    
    if (amigo === "" || !regex.test(amigo) || amigos.includes(amigo)){
        alterarMensagem("mensagem", "Por favor, insira um nome e não repetido.")
    } else {
        amigos.push(amigo);
        atualizarLista();
        alterarMensagem("mensagem", "Amigo adicionado com sucesso!");
        limparCampo("amigo");
    }
}
 function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
 }
function sortearAmigo(){
    if (amigos.length < 3){
    alterarMensagem("mensagem", "Não há amigos suficientes para sortear!")

    } else {
    let indice = Math.random() * amigos.length;
    indice = Math.floor(indice);
    const amigoSorteado = amigos[indice];

    const exibirResultado = document.getElementById("resultado");
    exibirResultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;

    }

}