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

function render(active = "Dashboard") {
  root.innerHTML = `
    <div class="admin-wrap">

      <header class="admin-head">

        <div>
          <div class="brand">
            🕷️ SPIDER ADMIN
          </div>

          <div class="muted">
            Spider Web Network • Administration
          </div>
        </div>

        <a
          class="btn"
          href="../miniapp/"
        >
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
              onclick="selectMenu('${item.replace(/'/g, "\\'")}')"
            >
              ${icon(item)}
              ${item}
            </button>
          `).join("")}

          <a
            class="logout"
            href="../miniapp/"
          >
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


/* =========================
   MENU ICONS
========================= */

function icon(name) {

  const icons = {
    "Dashboard": "📊",
    "Users": "👥",
    "Rewards": "💰",
    "Tasks": "✅",
    "Games": "🎮",
    "Referrals": "🔗",
    "Leaderboard": "🏆",
    "NFT Collections": "🖼️",
    "NFT Listings": "🛒",
    "Wallet Activity": "💳",
    "Languages": "🌐",
    "Notifications": "🔔",
    "Settings": "⚙️"
  };

  return icons[name] || "•";
}


/* =========================
   MENU SELECT
========================= */

function selectMenu(name) {

  render(name);

}


/* =========================
   MAIN PANELS
========================= */

function panel(name) {

  if (name === "Dashboard") {
    return dashboard();
  }

  if (name === "Users") {
    return users();
  }

  if (name === "Rewards") {
    return rewards();
  }

  if (name === "Tasks") {
    return tasks();
  }

  if (name === "Games") {
    return games();
  }

  if (name === "Referrals") {
    return referrals();
  }

  if (name === "Leaderboard") {
    return leaderboard();
  }

  if (name === "NFT Collections") {
    return nftCollections();
  }

  if (name === "NFT Listings") {
    return nftListings();
  }

  if (name === "Wallet Activity") {
    return walletActivity();
  }

  if (name === "Languages") {
    return languages();
  }

  if (name === "Notifications") {
    return notifications();
  }

  if (name === "Settings") {
    return settings();
  }

  return dashboard();
}


/* =========================
   DASHBOARD
========================= */

function dashboard() {

  return `
    <section class="panel">

      <h1>
        Dashboard
      </h1>

      <p class="muted">
        Spider ecosystem overview
      </p>

      <div class="cards">

        <div class="panel-card">

          <h3>
            Users Overview
          </h3>

          <div class="chart">

            <svg
              viewBox="0 0 600 220"
              preserveAspectRatio="none"
            >

              <polyline
                points="
                  0,180
                  70,160
                  120,170
                  180,120
                  250,140
                  320,90
                  390,110
                  460,60
                  530,85
                  600,30
                "
                fill="none"
                stroke="#9b4dff"
                stroke-width="4"
              />

            </svg>

          </div>

        </div>


        <div class="panel-card">

          <h3>
            Top Countries
          </h3>

          <div class="country">
            <span>🇮🇳 India</span>
            <b>45%</b>
          </div>

          <div class="country">
            <span>🇮🇩 Indonesia</span>
            <b>20%</b>
          </div>

          <div class="country">
            <span>🇵🇰 Pakistan</span>
            <b>15%</b>
          </div>

          <div class="country">
            <span>🌎 Others</span>
            <b>20%</b>
          </div>

        </div>

      </div>


      <div class="panel-card">

        <h3>
          Quick Controls
        </h3>

        <p class="muted">
          Production controls should be connected
          to your authenticated backend/API.
        </p>

        <button
          class="primary"
          onclick="demoMessage()"
        >
          Test Admin Action
        </button>

      </div>

    </section>
  `;
}


/* =========================
   USERS
========================= */

function users() {

  return tablePanel(
    "Users",
    [
      "User",
      "Telegram",
      "Wallet",
      "Balance",
      "Status"
    ],
    [
      [
        "@Rohan",
        "124001",
        "UQCL...3k7m",
        "245.85 USDT",
        "Active"
      ],
      [
        "@Aman",
        "124002",
        "UQCY...8a2k",
        "96.50 USDT",
        "Active"
      ],
      [
        "@Karan",
        "124003",
        "UQAS...9nX",
        "82.45 USDT",
        "Active"
      ],
      [
        "@SpiderMaster",
        "124004",
        "UQA2...1x9n",
        "125.50 USDT",
        "Review"
      ]
    ]
  );
}


/* =========================
   REWARDS
========================= */

function rewards() {

  return formPanel(
    "Reward Management",
    [
      ["Daily Reward", "0.50 USDT"],
      ["Referral Reward", "0.50 USDT"],
      ["Game Win Reward", "0.25 USDT"],
      ["Web Jump Reward", "0.10 USDT"]
    ]
  );
}


/* =========================
   TASKS
========================= */

function tasks() {

  return formPanel(
    "Task Management",
    [
      ["Join Community", "1.00 USDT"],
      ["Daily Bot Start", "0.50 USDT"],
      ["Invite 5 Friends", "2.00 USDT"],
      ["Daily Check-in", "0.50 USDT"]
    ]
  );
}


/* =========================
   GAMES
========================= */

function games() {

  return formPanel(
    "Game Settings",
    [
      ["Daily Match Limit", "5"],
      ["Win Reward", "0.25 USDT"],
      ["Loss Reward", "0.00 USDT"],
      ["Web Jump Reward", "0.10 USDT"]
    ]
  );
}


/* =========================
   REFERRALS
========================= */

function referrals() {

  return tablePanel(
    "Referral Management",
    [
      "Rank",
      "User",
      "Referrals",
      "Earned",
      "Status"
    ],
    [
      [
        "1",
        "@SpiderKing",
        "16,587",
        "4,000 USDT",
        "Active"
      ],
      [
        "2",
        "@Deepanshu",
        "1,017",
        "3,000 USDT",
        "Active"
      ],
      [
        "3",
        "@wang",
        "742",
        "2,000 USDT",
        "Active"
      ],
      [
        "4",
        "@arup",
        "702",
        "1,500 USDT",
        "Active"
      ]
    ]
  );
}


/* =========================
   LEADERBOARD
========================= */

function leaderboard() {

  return tablePanel(
    "Global Leaderboard",
    [
      "Rank",
      "User",
      "USDT Earned",
      "Friends",
      "Status"
    ],
    [
      [
        "1",
        "@Rohan",
        "125,500.00 USDT",
        "2,840",
        "Active"
      ],
      [
        "2",
        "@Aman",
        "96,500.00 USDT",
        "1,920",
        "Active"
      ],
      [
        "3",
        "@Karan",
        "82,450.00 USDT",
        "1,620",
        "Active"
      ],
      [
        "245",
        "@SpiderMaster",
        "125.50 USDT",
        "128",
        "Active"
      ]
    ]
  );
}


/* =========================
   NFT COLLECTIONS
========================= */

function nftCollections() {

  return formPanel(
    "NFT Collection",
    [
      ["Collection Name", "Spider Genesis"],
      ["Network", "Configured blockchain"],
      ["Display Currency", "USDT"],
      ["Collection Status", "Published"]
    ]
  );
}


/* =========================
   NFT LISTINGS
========================= */

function nftListings() {

  return tablePanel(
    "NFT Listings",
    [
      "NFT",
      "Price",
      "Inventory",
      "Status",
      "Action"
    ],
    [
      [
        "Spider #001",
        "120 USDT",
        "1",
        "Published",
        "Edit"
      ],
      [
        "Spider #002",
        "250 USDT",
        "1",
        "Published",
        "Edit"
      ],
      [
        "Spider #003",
        "500 USDT",
        "1",
        "Draft",
        "Edit"
      ],
      [
        "Spider #004",
        "80 USDT",
        "1",
        "Published",
        "Edit"
      ]
    ]
  );
}


/* =========================
   WALLET ACTIVITY
========================= */

function walletActivity() {

  return tablePanel(
    "Wallet Activity",
    [
      "User",
      "Wallet",
      "Action",
      "Amount",
      "Time"
    ],
    [
      [
        "@Rohan",
        "UQCL...3k7m",
        "Connect",
        "—",
        "12:55"
      ],
      [
        "@Aman",
        "UQCY...8a2k",
        "Receive",
        "96.50 USDT",
        "12:43"
      ],
      [
        "@Karan",
        "UQAS...9nX",
        "Receive",
        "82.45 USDT",
        "12:32"
      ]
    ]
  );
}


/* =========================
   LANGUAGES
========================= */

function languages() {

  return formPanel(
    "Language Management",
    [
      ["Default Language", "English"],
      [
        "Enabled Languages",
        "English, Hindi, Arabic, Spanish, Russian, Turkish"
      ]
    ]
  );
}


/* =========================
   NOTIFICATIONS
========================= */

function notifications() {

  return formPanel(
    "Announcements",
    [
      [
        "Title",
        "Spider Network Update"
      ],
      [
        "Message",
        "New tasks and rewards are available."
      ]
    ]
  );
}


/* =========================
   SETTINGS
========================= */

function settings() {

  return formPanel(
    "General Settings",
    [
      ["App Name", "SPIDER Web Network"],
      ["Spider Rate", "0.50 USDT"],
      ["Maintenance Mode", "OFF"],
      ["Default Language", "English"]
    ]
  );
}


/* =========================
   TABLE BUILDER
========================= */

function tablePanel(title, headers, rows) {

  return `
    <section class="panel">

      <h1>
        ${title}
      </h1>

      <div class="table-wrap">

        <table>

          <thead>

            <tr>

              ${headers.map(header => `
                <th>
                  ${header}
                </th>
              `).join("")}

            </tr>

          </thead>

          <tbody>

            ${rows.map(row => `

              <tr>

                ${row.map((cell, index) => {

                  if (
                    index === row.length - 1 &&
                    ["Active", "Published", "Draft", "Review"]
                      .includes(cell)
                  ) {

                    return `
                      <td>
                        <span class="status">
                          ${cell}
                        </span>
                      </td>
                    `;

                  }

                  return `
                    <td>
                      ${cell}
                    </td>
                  `;

                }).join("")}

              </tr>

            `).join("")}

          </tbody>

        </table>

      </div>

    </section>
  `;
}


/* =========================
   FORM BUILDER
========================= */

function formPanel(title, fields) {

  return `
    <section class="panel">

      <h1>
        ${title}
      </h1>

      <div class="form-card">

        ${fields.map(field => `

          <label>

            ${field[0]}

            <input
              value="${field[1]}"
            >

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


/* =========================
   DEMO ACTIONS
========================= */

function savePreview() {

  alert(
    "Preview only — backend/API is not connected."
  );

}

function demoMessage() {

  alert(
    "Admin action preview. No real database change was made."
  );

}


/* =========================
   START
========================= */

render("Dashboard");
