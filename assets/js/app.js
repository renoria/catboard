function loadView(view) {
  fetch(`views/${view}.html`)
    .then(res => res.text())
    .then(html => {
      const app = document.getElementById("app");
      app.innerHTML = html;

      // carica CSS specifico
      loadCSS(view);

      // carica JS specifico
      loadJS(view);
    });

  // stato attivo nav
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  const activeBtn = document.querySelector(`[data-view="${view}"]`);
  if (activeBtn) activeBtn.classList.add("active");
}

function loadCSS(view) {
  let existing = document.getElementById("view-css");
  if (existing) existing.remove();

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `assets/css/${view}.css`;
  link.id = "view-css";

  document.head.appendChild(link);
}

function loadJS(view) {
  let existing = document.getElementById("view-js");
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.src = `assets/js/${view}.js`;
  script.id = "view-js";

  document.body.appendChild(script);
}