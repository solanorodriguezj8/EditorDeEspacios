const filtro = document.getElementById("filtro");
const cards = document.querySelectorAll(".card");

filtro.addEventListener("change", () => {
  const valor = filtro.value;

  cards.forEach(card => {
    if (valor === "todos" || card.dataset.tipo === valor) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// evento click
cards.forEach(card => {
  card.addEventListener("click", () => {
    alert("Has seleccionado: " + card.innerText);
  });
});