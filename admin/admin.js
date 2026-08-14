const root = document.getElementById("adminApp");

const menu = [
  "Dashboard",
  "Users",
  "Rewards",
  "Tasks",
  "Games",
  "Referrals",
  "Leaderboard",
  "NFT Collections",
  "NFT Listings",
  "Wallet Activity",
  "Languages",
  "Notifications",
  "Settings"
];

const stats = [
  ["Total Users", "12,845"],
  ["Active Users", "6,245"],
  ["Total Rewards", "45,680 USDT"],
  ["NFT Volume", "24,680 USDT"]
];

function icon(name) {
  const icons = {
    Dashboard: "📊",
    Users: "👥",
    Rewards: "💰",
    Tasks: "✅",
    Games: "🎮",
    Referrals: "🔗",
    Leaderboard: "🏆",
    "NFT Collections": "🖼️",
    "NFT Listings": "🛒",
    "Wallet Activity": "💳",
    Languages: "🌐",
    Notifications: "🔔",
    Settings: "⚙️"
  };

  return icons[name] || "•";
}

function render(active = "Dashboard") {
  root.innerHTML = `
    <div class="admin-wrap">

      <header class="admin-head">
        <div>
          <div class="brand">🕷️ SPIDER ADMIN</div>
          <div class="muted">
            Spider Web Network • Administration
          </div>
        </div>

        <a class="btn" href="../miniapp/">
          Open Mini App
        </a>
      </header>

      <div class="stat-grid">
        ${stats.map(stat => `
          <div class="stat">
            <span>${stat[0]}</span>
            <b>${stat[1]}</b>
          </div>
        `).join("")}
      </div>

      <div class="layout">

        <aside class="sidebar">
          ${menu.map(item => `
            <button
              class="${item === active ? "active" : ""}"
              onclick="selectMenu('${item}')"
            >
              ${icon(item)} ${item}
            </button>
          `).join("")}

          <a class="logout" href="../miniapp/">
            ↗ Open Mini App
          </a>
        </aside>

        <main class="content">
          ${panel(active)}
        </main>

      </div>
    </div>
  `;
}

function selectMenu(name) {
  render(name);
}

function panel(name) {
  switch (name) {
    case "Dashboard": return dashboard();
    case "Users": return users();
    case "Rewards": return rewards();
    case "Tasks": return tasks();
    case "Games": return games();
    case "Referrals": return referrals();
    case "Leaderboard": return leaderboard();
    case "NFT Collections": return nftCollections();
    case "NFT Listings": return nftListings();
    case "Wallet Activity": return walletActivity();
    case "Languages": return languages();
    case "Notifications": return notifications();
    case "Settings": return settings();
    default: return dashboard();
  }
}

function dashboard() {
  return `
    <section class="panel">

      <h1>Dashboard</h1>
      <p class="muted">
        Spider ecosystem overview
      </p>

      <div class="cards">

        <div class="panel-card">
          <h3>Users Overview</h3>

          <div class="chart">
            <svg viewBox="0 0 600 220"
                 preserveAspectRatio="none">

              <polyline
                points="0,180 70,160 120,170 180,120
                        250,140 320,90 390,110
                        460,60 530,85 600,30"
                fill="none"
                stroke="#9b4dff"
                stroke-width="4"
              />

            </svg>
          </div>
        </div>

        <div class="panel-card">
          <h3>Top Countries</h3>

          ${[
            ["🇮🇳 India", "45%"],
            ["🇮🇩 Indonesia", "20%"],
            ["🇵🇰 Pakistan", "15%"],
            ["🌎 Others", "20%"]
          ].map(x => `
            <div class="country">
              <span>${x[0]}</span>
              <b>${x[1]}</b>
            </div>
          `).join("")}

        </div>

      </div>

      <div class="panel-card">
        <h3>Quick Controls</h3>

        <p class="muted">
          Preview controls. Backend/API is not connected.
        </p>

        <button class="primary" onclick="demoMessage()">
          Test Admin Action
        </button>
      </div>

    </section>
  `;
}

function users() {
  return tablePanel(
    "Users",
    ["User", "Telegram", "Wallet", "Balance", "Status"],
    [
      ["@Rohan", "124001", "UQCL...3k7m", "245.85 USDT", "Active"],
      ["@Aman", "124002", "UQCY...8a2k", "96.50 USDT", "Active"],
      ["@Karan", "124003", "UQAS...9nX", "82.45 USDT", "Active"],
      ["@SpiderMaster", "124004", "UQA2...1x9n", "125.50 USDT", "Review"]
    ]
  );
}

function rewards() {
  return formPanel("Reward Management", [
    ["Daily Reward", "0.50 USDT"],
    ["Referral Reward", "0.50 USDT"],
    ["Game Win Reward", "0.25 USDT"],
    ["Web Jump Reward", "0.10 USDT"]
  ]);
}

function tasks() {
  return formPanel("Task Management", [
    ["Join Community", "1.00 USDT"],
    ["Daily Bot Start", "0.50 USDT"],
    ["Invite 5 Friends", "2.00 USDT"],
    ["Daily Check-in", "0.50 USDT"]
  ]);
}

function games() {
  return formPanel("Game Settings", [
    ["Daily Match Limit", "5"],
    ["Win Reward", "0.25 USDT"],
    ["Loss Reward", "0.00 USDT"],
    ["Web Jump Reward", "0.10 USDT"]
  ]);
}

function referrals() {
  return tablePanel(
    "Referral Management",
    ["Rank", "User", "Referrals", "Earned", "Status"],
    [
      ["1", "@SpiderKing", "16,587", "4,000 USDT", "Active"],
      ["2", "@Deepanshu", "1,017", "3,000 USDT", "Active"],
      ["3", "@wang", "742", "2,000 USDT", "Active"],
      ["4", "@arup", "702", "1,500 USDT", "Active"]
    ]
  );
}

function leaderboard() {
  return tablePanel(
    "Global Leaderboard",
    ["Rank", "User", "USDT Earned", "Friends", "Status"],
    [
      ["1", "@Rohan", "125,500 USDT", "2,840", "Active"],
      ["2", "@Aman", "96,500 USDT", "1,920", "Active"],
      ["3", "@Karan", "82,450 USDT", "1,620", "Active"],
      ["245", "@SpiderMaster", "125.50 USDT", "128", "Active"]
    ]
  );
}

function nftCollections() {
  return formPanel("NFT Collection", [
    ["Collection Name", "Spider Genesis"],
    ["Network", "Configured blockchain"],
    ["Display Currency", "USDT"],
    ["Collection Status", "Published"]
  ]);
}

function nftListings() {
  return tablePanel(
    "NFT Listings",
    ["NFT", "Price", "Inventory", "Status", "Action"],
    [
      ["Spider #001", "120 USDT", "1", "Published", "Edit"],
      ["Spider #002", "250 USDT", "1", "Published", "Edit"],
      ["Spider #003", "500 USDT", "1", "Draft", "Edit"],
      ["Spider #004", "80 USDT", "1", "Published", "Edit"]
    ]
  );
}

function walletActivity() {
  return tablePanel(
    "Wallet Activity",
    ["User", "Wallet", "Action", "Amount", "Time"],
    [
      ["@Rohan", "UQCL...3k7m", "Connect", "—", "12:55"],
      ["@Aman", "UQCY...8a2k", "Receive", "96.50 USDT", "12:43"],
      ["@Karan", "UQAS...9nX", "Receive", "82.45 USDT", "12:32"]
    ]
  );
}

function languages() {
  return formPanel("Language Management", [
    ["Default Language", "English"],
    [
      "Enabled Languages",
      "English, Hindi, Arabic, Spanish, Russian, Turkish"
    ]
  ]);
}

function notifications() {
  return formPanel("Announcements", [
    ["Title", "Spider Network Update"],
    ["Message", "New tasks and rewards are available."]
  ]);
}

function settings() {
  return formPanel("General Settings", [
    ["App Name", "SPIDER Web Network"],
    ["Spider Rate", "0.50 USDT"],
    ["Maintenance Mode", "OFF"],
    ["Default Language", "English"]
  ]);
}

function tablePanel(title, headers, rows) {
  return `
    <section class="panel">

      <h1>${title}</h1>

      <div class="table-wrap">
        <table>

          <thead>
            <tr>
              ${headers.map(h => `<th>${h}</th>`).join("")}
            </tr>
          </thead>

          <tbody>
            ${rows.map(row => `
              <tr>
                ${row.map(cell => `
                  <td>${cell}</td>
                `).join("")}
              </tr>
            `).join("")}
          </tbody>

        </table>
      </div>

    </section>
  `;
}

function formPanel(title, fields) {
  return `
    <section class="panel">

      <h1>${title}</h1>

      <div class="form-card">

        ${fields.map(field => `
          <label>
            ${field[0]}
            <input value="${field[1]}">
          </label>
        `).join("")}

        <button
          class="primary"
          onclick="savePreview()"
        >
          Save Changes
        </button>

      </div>

    </section>
  `;
}

function savePreview() {
  alert("Preview only — no real database change was made.");
}

function demoMessage() {
  alert("Preview admin action — backend is not connected.");
}

render("Dashboard");
