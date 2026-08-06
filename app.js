const dataUrl = new URL("data/site-data.json", window.location.href);

const formatDate = (value) => {
  const date = new Date(`${value}T12:00:00`);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
};

const text = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const renderAnnouncements = (items) => {
  const root = document.querySelector("#announcements");
  if (!root) return;
  root.innerHTML = items.map((item) => `
    <article class="announcement">
      <time datetime="${item.date}">${formatDate(item.date)}</time>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `).join("");
};

const renderSeasons = (items) => {
  const root = document.querySelector("#seasons");
  if (!root) return;
  root.innerHTML = items.map((item) => `
    <article class="season-card">
      <div>
        <span class="card-kicker">${item.status}</span>
        <h3>${item.game}</h3>
        <p>${item.summary}</p>
      </div>
      <div>
        <div class="record"><strong>${item.record}</strong></div>
        <div class="progress" aria-label="Progresso de ${item.progress}%">
          <span style="width: ${item.progress}%"></span>
        </div>
      </div>
      <div class="pill-row">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </article>
  `).join("");
};

const renderStats = (items) => {
  const root = document.querySelector("#stats");
  if (!root) return;
  root.innerHTML = items.map((item) => `
    <article class="stat-card">
      <span class="card-kicker">${item.label}</span>
      <strong>${item.value}</strong>
      <span>${item.note}</span>
    </article>
  `).join("");
};

const initials = (name) => name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const renderMembers = (items) => {
  const root = document.querySelector("#members");
  if (!root) return;
  root.innerHTML = items.map((item) => `
    <article class="member-card${item.name === "Rafael" ? " leader-card" : ""}">
      <div class="member-avatar" aria-hidden="true">${initials(item.name)}</div>
      <div>
        <span class="card-kicker">${item.tag}</span>
        <h3>${item.name}</h3>
        <strong>${item.role}</strong>
        <p>${item.bio}</p>
      </div>
    </article>
  `).join("");
};

const renderEvents = (items) => {
  const root = document.querySelector("#events");
  if (!root) return;
  const limit = document.body.dataset.page === "agenda" ? items.length : 2;
  root.innerHTML = items.slice(0, limit).map((item) => `
    <article class="event">
      <div class="event-date">
        <span>${item.date}<br>${item.time}</span>
      </div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </div>
    </article>
  `).join("");
};

const renderTrophyStats = (items) => {
  const root = document.querySelector("#trophy-stats");
  if (!root) return;
  root.innerHTML = items.map((item) => `
    <article class="stat-card">
      <span class="card-kicker">${item.label}</span>
      <strong>${item.value}</strong>
      <span>${item.note}</span>
    </article>
  `).join("");
};

const renderTrophies = (items) => {
  const root = document.querySelector("#trophies");
  if (!root) return;
  root.innerHTML = items.map((item) => `
    <article class="trophy-card">
      <span class="trophy-medal">${item.tier}</span>
      <span class="card-kicker">${item.game} / ${item.date}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `).join("");
};

const cs2Members = [
  {
    id: "rafael",
    name: "Rafael",
    tag: "Lider",
    score: 94,
    medals: [
      ["Ouro", "Clutch decisivo", "Resolve round complicado quando a call pesa."],
      ["MVP", "Entrada limpa", "Abre espaco e transforma vantagem pequena em round ganho."],
      ["Diamante", "Capitao da call", "Mantem a colmeia junta nos mapas longos."]
    ]
  },
  {
    id: "bassa",
    name: "Bassa",
    tag: "Impacto",
    score: 86,
    medals: [
      ["Ouro", "Energia de lobby", "Puxa o ritmo quando a partida precisa acelerar."],
      ["Prata", "Trade seguro", "Fecha dupla e segura pos-bomb sem desespero."]
    ]
  },
  {
    id: "zana",
    name: "Zana",
    tag: "Controle",
    score: 82,
    medals: [
      ["Ouro", "Calma no caos", "Segura o mapa e deixa a resenha competitiva no ponto."],
      ["Bronze", "Utilidade", "Smoke e flash entrando no tempo certo."]
    ]
  },
  {
    id: "felbyz",
    name: "Felbyz",
    tag: "Clutch",
    score: 88,
    medals: [
      ["MVP", "Sangue frio", "Encaixa a call e vira round que parecia perdido."],
      ["Ouro", "Retake", "Volta no bomb com paciencia e mira quente."]
    ]
  },
  {
    id: "fer",
    name: "Fer",
    tag: "Versatil",
    score: 79,
    medals: [
      ["Prata", "Flex", "Entra em qualquer frente e ajuda a manter o lobby girando."],
      ["Bronze", "Apoio", "Cobre angulo ingrato sem reclamar da funcao."]
    ]
  },
  {
    id: "dudu",
    name: "Dudu",
    tag: "Pressao",
    score: 77,
    medals: [
      ["Prata", "Ritmo forte", "Jogo acelerado, call direta e cara de campeonato."],
      ["Bronze", "Execucao", "Ajuda a entrada acontecer sem travar o time."]
    ]
  },
  {
    id: "gabriel",
    name: "Gabriel",
    tag: "Base",
    score: 74,
    medals: [
      ["Prata", "Consistencia", "Fecha a retaguarda e segura a troca quando precisa."],
      ["Bronze", "Presenca", "Sempre aparece no lugar certo da rodada."]
    ]
  }
];

const renderCs2MemberPanel = (selectedId = "all") => {
  const root = document.querySelector("#cs2-member-panel");
  if (!root) return;

  if (selectedId === "all") {
    root.innerHTML = `
      <div class="cs2-comparison">
        ${cs2Members.map((member, index) => `
          <article class="cs2-compare-card">
            <div>
              <span class="card-kicker">#${index + 1} / ${member.tag}</span>
              <h3>${member.name}</h3>
            </div>
            <strong>${member.score}</strong>
            <div class="progress" aria-label="${member.name} com ${member.score} pontos">
              <span style="width: ${member.score}%"></span>
            </div>
          </article>
        `).join("")}
      </div>
    `;
    return;
  }

  const member = cs2Members.find((item) => item.id === selectedId);
  if (!member) return;
  root.innerHTML = `
    <div class="cs2-medal-header">
      <span class="card-kicker">${member.tag}</span>
      <h2>${member.name}</h2>
      <strong>${member.score} pts</strong>
    </div>
    <div class="cs2-medal-grid">
      ${member.medals.map(([tier, title, body]) => `
        <article class="cs2-medal-card">
          <span class="trophy-medal">${tier}</span>
          <div>
            <h3>${title}</h3>
            <p>${body}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
};

const setupCs2MemberTabs = () => {
  const buttons = document.querySelectorAll("[data-cs2-member]");
  if (!buttons.length) return;
  renderCs2MemberPanel("all");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      renderCs2MemberPanel(button.dataset.cs2Member);
    });
  });
};

fetch(dataUrl)
  .then((response) => response.json())
  .then((data) => {
    text("#members-count", data.group.members);
    text("#online-count", data.group.online);
    text("#founded-date", data.group.founded);
    text("#last-updated", formatDate(data.lastUpdated));
    renderAnnouncements(data.announcements);
    renderSeasons(data.seasons);
    renderStats(data.stats);
    renderMembers(data.members);
    renderEvents(data.events);
    renderTrophyStats(data.trophyStats);
    renderTrophies(data.trophies);
    setupCs2MemberTabs();
  })
  .catch(() => {
    text("#last-updated", "dados indisponiveis");
  });
