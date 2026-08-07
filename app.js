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
    tag: "AWPer / IGL / Suporte",
    score: 94,
    medals: [
      ["Season 7", "Clutch decisivo", "Resolve round complicado quando a call pesa.", "assets/cs2-season-7-medal.png"],
      ["Season 2", "Season 2", "Medalha da Season 2.", "assets/cs2-season-2-medal.png"],
      ["Season 3", "Season 3", "Medalha da Season 3.", "assets/cs2-season-3-medal.png"],
      ["Season 4", "Season 4", "Medalha da Season 4.", "assets/cs2-season-4-medal.png"]
    ]
  },
  {
    id: "bassa",
    name: "Bassa",
    tag: "Lurker",
    score: 86,
    medals: [
      ["Season 7", "Season 7", "Medalha da Season 7.", "assets/cs2-bassa-season-7-medal.png"],
      ["Season 3", "Season 3", "Medalha da Season 3.", "assets/cs2-bassa-season-3-medal.png"],
      ["Season 4", "Season 4", "Medalha da Season 4.", "assets/cs2-bassa-season-4-medal.png"]
    ]
  },
  {
    id: "zana",
    name: "Zana",
    tag: "Entry Fragger / Rifler",
    score: 82,
    medals: [
      ["Season 7", "Season 7", "Medalha da Season 7.", "assets/cs2-zana-season-7-medal.png"],
      ["Season 2", "Season 2", "Medalha da Season 2.", "assets/cs2-zana-season-2-medal.png"],
      ["Season 3", "Season 3", "Medalha da Season 3.", "assets/cs2-zana-season-3-medal.png"],
      ["Season 4", "Season 4", "Medalha da Season 4.", "assets/cs2-zana-season-4-medal.png"]
    ]
  },
  {
    id: "felbyz",
    name: "Felbyz",
    tag: "Second Fragger",
    score: 88,
    medals: [
      ["Season 7", "Season 7", "Medalha da Season 7.", "assets/cs2-felbyz-season-7-medal.png"],
      ["Season 2", "Season 2", "Medalha da Season 2.", "assets/cs2-felbyz-season-2-medal.png"],
      ["Season 3", "Season 3", "Medalha da Season 3.", "assets/cs2-felbyz-season-3-medal.png"],
      ["Season 4", "Season 4", "Medalha da Season 4.", "assets/cs2-felbyz-season-4-medal.png"]
    ]
  },
  {
    id: "fer",
    name: "Fer",
    tag: "Âncora",
    score: 79,
    medals: [
      ["Season 7", "Season 7", "Medalha da Season 7.", "assets/cs2-fer-season-7-medal.png"],
      ["Season 3", "Season 3", "Medalha da Season 3.", "assets/cs2-fer-season-3-medal.png"]
    ]
  },
  {
    id: "dudu",
    name: "Dudu",
    tag: "Rifler / Âncora",
    score: 77,
    medals: [
      ["Season 7", "Season 7", "Medalha da Season 7.", "assets/cs2-dudu-season-7-medal.png"],
      ["Season 2", "Season 2", "Medalha da Season 2.", "assets/cs2-dudu-season-2-medal.png"],
      ["Season 4", "Season 4", "Medalha da Season 4.", "assets/cs2-dudu-season-4-medal.png"]
    ]
  },
  {
    id: "gabriel",
    name: "Gabriel",
    tag: "Rifler / Entry Fragger",
    score: 74,
    medals: [
      ["Season 7", "Season 7", "Medalha da Season 7.", "assets/cs2-gabriel-season-7-medal.png"],
      ["Season 2", "Season 2", "Medalha da Season 2.", "assets/cs2-gabriel-season-2-medal.png"],
      ["Season 3", "Season 3", "Medalha da Season 3.", "assets/cs2-gabriel-season-3-medal.png"]
    ]
  }
];

const renderCs2MemberPanel = (selectedId = "all") => {
  const root = document.querySelector("#cs2-member-panel");
  if (!root) return;

  const renderMedalRow = (member) => `
    <tr>
      <th scope="row">
        <strong>${member.name}</strong>
        <span>${member.tag}</span>
      </th>
      <td>
        <div class="cs2-sheet-medals">
          ${member.medals.map(([tier, title, , image]) => image
            ? `<span class="cs2-sheet-medal image-medal"><img src="${image}" alt="${title}"></span>`
            : `<span class="cs2-sheet-medal">${tier}</span>`
          ).join("")}
        </div>
      </td>
    </tr>
  `;

  const renderMedalSheet = (members, label) => `
    <div class="cs2-medal-sheet" role="region" aria-label="${label}">
      <table>
        <thead>
          <tr>
            <th>Membro</th>
            <th>Medalhas</th>
          </tr>
        </thead>
        <tbody>
          ${members.map(renderMedalRow).join("")}
        </tbody>
      </table>
    </div>
  `;

  if (selectedId === "all") {
    const ranking = [...cs2Members].sort((a, b) => b.score - a.score);
    root.innerHTML = renderMedalSheet(ranking, "Planilha de medalhas CS2");
    return;
  }

  const member = cs2Members.find((item) => item.id === selectedId);
  if (!member) return;
  root.innerHTML = renderMedalSheet([member], `Medalhas CS2 de ${member.name}`);
};

const setupCs2MemberTabs = () => {
  const buttons = document.querySelectorAll("[data-cs2-member]");
  if (!buttons.length) return;

  const memberIds = ["all", ...cs2Members.map((member) => member.id)];
  const initialId = memberIds.includes(window.location.hash.slice(1))
    ? window.location.hash.slice(1)
    : "all";

  const activate = (id) => {
    buttons.forEach((item) => {
      const isActive = item.dataset.cs2Member === id;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });
    renderCs2MemberPanel(id);
  };

  activate(initialId);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.cs2Member;
      history.replaceState(null, "", `#${id}`);
      activate(id);
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
