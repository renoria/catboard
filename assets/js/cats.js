document.addEventListener("DOMContentLoaded", loadCats());

function loadCats() {
  fetch("assets/data/cats.json")
    .then(res => res.json())
    .then(data => renderCats(data))
    .catch(err => {
      console.error("Errore caricamento gatti:", err);
    });
}

function renderCats(cats) {
  const container = document.getElementById("cats-container");
  container.innerHTML = "";

  cats.forEach(cat => {
    const card = document.createElement("div");
    card.className = "cat-card";

    card.innerHTML = `
      <img src="${cat.image}" class="cat-img">

      <div class="cat-info">
        <h3>${cat.name}</h3>
        <p>${cat.gender} • ${cat.age} anni</p>

        <div class="badges">
            ${getHealthBadge(cat.health)}
            ${getAdoptionBadge(cat.adoption)}
            ${getBehaviorBadge(cat.behavior)}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function getAdoptionBadge(type) {
  const map = {
    "adoptable": "Adottabile",
    "distance": "A distanza",
    "not-adoptable": "Non adottabile"
  };

  return `<span class="badge ${type}">${map[type]}</span>`;
}

function getHealthBadge(type) {
  const map = {
    "healthy": "Sano",
    "observation": "Osservazione",
    "sick": "Malato"
  };

  return `<span class="badge ${type}">${map[type]}</span>`;
}

function getBehaviorBadge(type) {
  const map = {
    "friendly": "Amichevole",
    "cautious": "Guardingo",
    "feral": "Forastico"
  };

  return `<span class="badge ${type}">${map[type]}</span>`;
}