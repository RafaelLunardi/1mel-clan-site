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
  })
  .catch(() => {
    text("#last-updated", "dados indisponiveis");
  });
