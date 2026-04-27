function contato(plano) {
  const numero = "5513996619289";
  const mensagem = `Olá, estou interessado no ${plano} da Bovencio Tech. Podemos conversar sobre os detalhes?`;
  window.location.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

function toggleDetalhes(btn) {
  const detalhes = btn.nextElementSibling;
  detalhes.classList.toggle("ativo");
}