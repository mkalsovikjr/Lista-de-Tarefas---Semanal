function adicionarTarefa() {
  const input = document.getElementById("tarefa");
  const texto = input.value.trim();
  const dia = document.getElementById("dia").value;

  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" onclick="toggleConcluida(this)">
    <span>${texto}</span>
    <button onclick="removerTarefa(this)">X</button>
  `;

  document.getElementById(dia).appendChild(li);
  input.value = "";
}

function removerTarefa(botao) {
  botao.parentElement.remove();
}

function toggleConcluida(checkbox) {
  const li = checkbox.parentElement;
  li.classList.toggle("concluida", checkbox.checked);
}
