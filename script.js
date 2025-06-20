// Início do namoro (altera para a tua data real)
const inicioNamoro = new Date("2025-01-21"); 

function atualizaContador() {
  const hoje = new Date();
  const diff = Math.floor((hoje - inicioNamoro) / (1000 * 60 * 60 * 24));
  document.getElementById("contador").textContent = `Estamos juntos há ${diff} dias 💕`;
}

function mostrarMensagem() {
  document.getElementById("mensagem").style.display = "block";
}

// Criar corações animados
function criarCoracao() {
  const coracoes = document.getElementById("coracoes");
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = Math.random() * 2 + 3 + "s";
  coracoes.appendChild(coracao);

  setTimeout(() => coracao.remove(), 4000);
}

// Repetir corações a cada 300ms
setInterval(criarCoracao, 300);

atualizaContador();

