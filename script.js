function atualizarRelogio(){
  const agora = new Date();
  const h = String(agora.getHours()).padStart(2,"0");
  const m = String(agora.getMinutes()).padStart(2,"0");
  const s = String(agora.getSeconds()).padStart(2,"0");

  document.getElementById("clock").innerText = `${h}:${m}:${s}`;
  document.getElementById("bigTime").innerText = `${h}:${m}:${s}`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

function registrar(tipo){
  const agora = new Date();
  const data = agora.toLocaleDateString();
  const hora = agora.toLocaleTimeString();

  const tabela = document.getElementById("tabelaRegistros");

  const linha = document.createElement("tr");

  linha.innerHTML = `
    <td>${data}</td>
    <td>${hora}</td>
    <td><span class="tag ${tipo === 'Entrada' ? 'tag-entry' : 'tag-exit'}">${tipo}</span></td>
  `;

  tabela.appendChild(linha);
  atualizarTotal();
}

function atualizarTotal(){
  const total = document.querySelectorAll("#tabelaRegistros tr").length;
  document.getElementById("totalRegistros").innerText = total;
}

function limparRegistros(){
  document.getElementById("tabelaRegistros").innerHTML = "";
  atualizarTotal();
}