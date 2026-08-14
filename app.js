let current = "home";
let balance = 125.50;
let friends = 128;
let referralEarned = 80;
let rank = 245;
let streak = 4;

let game = "ttt";
let board = Array(9).fill("");
let jumpX = 35;
let jumping = false;

const app = document.getElementById("app");

function shell(content) {
  app.innerHTML = `
    <div class="app">
      <div class="top">
        <div class="brand">
          <span class="logo">🕷️</span>
          SPIDER
        </div>

        <button class="avatar" onclick="page('profile')">
          S
        </button>
      </div>

      ${content}
    </div>
  `;
}

function page(name) {
  current = name;

  if (name === "home") home();
  if (name === "games") games();
  if (name === "tasks") tasks();
  if (name === "frens") frens();
  if (name === "profile") profile();
}

/* =========================
   HOME
========================= */

function home() {
  shell(`
    <div class="hero">

      <div class="gold">
        WEB NETWORK
      </div>

      <div class="balance">
        ${balance.toFixed(2)} USDT
      </div>

      <div class="muted">
        Total earned • Preview account
      </div>

      <div class="stats">

        <div class="stat">
          <span>Top Global</span>
          <b>#${rank}</b>
        </div>

        <div class="stat">
          <span>Friends</span>
          <b>${friends}</b>
        </div>

      </div>

      <button class="btn full" onclick="page('frens')">
        👥 Invite Friends
      </button>

    </div>

    <h2 class="title">
      Quick Access
    </h2>

    <div class="grid">

      <div class="tile" onclick="page('games')">
        <div>🎮</div>
        Games
      </div>

      <div class="tile" onclick="page('tasks')">
        <div>✅</div>
        Tasks
      </div>

      <div class="tile" onclick="nfts()">
        <div>🖼️</div>
        NFT Hub
      </div>

      <div class="tile" onclick="page('profile')">
        <div>👤</div>
        Profile
      </div>

    </div>

    <h2 class="title">
      Daily Reward
    </h2>

    <div class="card" style="padding:20px">

      <div class="row">

        <div>
          <b>🔥 Daily Check-in</b>
          <div class="muted">
            Day ${streak} streak
          </div>
        </div>

        <button class="btn" onclick="claimReward()">
          +0.50
        </button>

      </div>

    </div>
  `);
}

function claimReward() {
  balance += 0.50;
  streak++;

  home();

  alert("Demo reward claimed: +0.50 USDT");
}

/* =========================
   GAMES
========================= */

function games() {
  shell(`
    <h2 class="title">
      🎮 Spider Games
    </h2>

    <div class="notice">
      Daily limit: <b>5 matches</b>.
      Demo rewards only.
    </div>

    <div class="tabs">

      <button
        class="${game === "ttt" ? "on" : ""}"
        onclick="game='ttt'; games()"
      >
        🕷️ Tic-Tac-Toe
      </button>

      <button
        class="${game === "jump" ? "on" : ""}"
        onclick="game='jump'; games()"
      >
        🕸️ Web Jump
      </button>

    </div>

    ${
      game === "ttt"
        ? ticTacToe()
        : webJump()
    }
  `);
}

/* =========================
   TIC TAC TOE
========================= */

function ticTacToe() {

  return `
    <div class="card" style="padding:20px">

      <div class="gold" style="text-align:center">
        SPIDER BATTLE
      </div>

      <h2 style="text-align:center">
        🕷️ Spider VS 🕸️ Web
      </h2>

      <p
        id="gameMessage"
        class="muted"
        style="text-align:center"
      >
        Your turn — Spider
      </p>

      <div class="board">

        ${board.map((cell, index) => `
          <button
            class="cell"
            onclick="makeMove(${index})"
          >
            ${cell}
          </button>
        `).join("")}

      </div>

      <button
        class="btn full"
        onclick="resetGame()"
      >
        Reset Game
      </button>

    </div>
  `;
}

function makeMove(index) {

  if (board[index] !== "") {
    return;
  }

  board[index] = "🕷️";

  if (checkWinner("🕷️")) {
    balance += 0.50;
    gamesMessage("🕷️ Spider wins! +0.50 USDT");
    return;
  }

  if (board.every(Boolean)) {
    gamesMessage("Draw!");
    return;
  }

  const empty = [];

  board.forEach((cell, i) => {
    if (!cell) empty.push(i);
  });

  if (empty.length > 0) {

    const random =
      empty[Math.floor(Math.random() * empty.length)];

    board[random] = "🕸️";
  }

  if (checkWinner("🕸️")) {
    gamesMessage("🕸️ Web wins! Try again.");
    return;
  }

  games();
}

function checkWinner(symbol) {

  const combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  return combinations.some(combo => {

    return combo.every(
      index => board[index] === symbol
    );

  });
}

function gamesMessage(message) {

  shell(`
    <h2 class="title">
      🎮 Spider Games
    </h2>

    <div class="tabs">

      <button
        class="${game === "ttt" ? "on" : ""}"
        onclick="game='ttt'; games()"
      >
        🕷️ Tic-Tac-Toe
      </button>

      <button
        class="${game === "jump" ? "on" : ""}"
        onclick="game='jump'; games()"
      >
        🕸️ Web Jump
      </button>

    </div>

    <div class="card" style="padding:25px;text-align:center">

      <h2>${message}</h2>

      <p class="muted">
        Demo game result
      </p>

      <button
        class="btn"
        onclick="resetGame()"
      >
        Play Again
      </button>

    </div>
  `);
}

function resetGame() {

  board = Array(9).fill("");

  game = "ttt";

  games();
}

/* =========================
   WEB JUMP
========================= */

function webJump() {

  return `
    <div class="card" style="padding:20px">

      <div class="gold">
        WEB JUMP
      </div>

      <h2>
        🕷️ Jump Across The Web
      </h2>

      <div class="notice">
        Reach the platforms and complete
        the jump. Demo game only.
      </div>

      <div class="jump">

        <div class="plat a"></div>
        <div class="plat b"></div>
        <div class="plat c"></div>
        <div class="plat d"></div>

        <div
          id="spiderPlayer"
          class="spider"
          style="left:${jumpX}px"
        >
          🕷️
        </div>

      </div>

      <div class="controls">

        <button
          class="control"
          onclick="moveSpider(-35)"
        >
          ← Left
        </button>

        <button
          class="control"
          onclick="moveSpider(35)"
        >
          Right →
        </button>

      </div>

      <button
        class="btn full"
        style="margin-top:12px"
        onclick="jumpSpider()"
      >
        🕷️ JUMP
      </button>

      <p
        id="jumpMessage"
        class="muted"
        style="text-align:center;margin-top:14px"
      ></p>

    </div>
  `;
}

function moveSpider(amount) {

  jumpX += amount;

  if (jumpX < 5) {
    jumpX = 5;
  }

  if (jumpX > 450) {
    jumpX = 450;
  }

  const player =
    document.getElementById("spiderPlayer");

  if (player) {
    player.style.left = jumpX + "px";
  }
}

function jumpSpider() {

  if (jumping) {
    return;
  }

  jumping = true;

  const player =
    document.getElementById("spiderPlayer");

  if (!player) {
    return;
  }

  player.style.bottom = "170px";

  setTimeout(() => {

    player.style.bottom = "30px";

    jumping = false;

    const message =
      document.getElementById("jumpMessage");

    if (message) {
      message.textContent =
        "🕷️ Nice jump! Demo reward +0.10 USDT";
    }

  }, 350);
}

/* =========================
   TASKS
========================= */

function tasks() {

  const taskList = [

    ["📢", "Join Spider Community", "One-time mission", "+1 USDT"],

    ["🤖", "Start Telegram Bot", "Daily mission", "+0.50 USDT"],

    ["🔥", "Daily Check-in", "Keep your streak", "+0.50 USDT"],

    ["👥", "Invite 5 Friends", "Referral mission", "+2 USDT"]

  ];

  shell(`

    <h2 class="title">
      ✅ Tasks & Missions
    </h2>

    ${taskList.map(task => `

      <div
        class="card"
        style="padding:18px;margin:10px 0"
      >

        <div class="row">

          <div>

            <b>
              ${task[0]} ${task[1]}
            </b>

            <div class="muted">
              ${task[2]}
            </div>

          </div>

          <span class="pill">
            ${task[3]}
          </span>

        </div>

      </div>

    `).join("")}

  `);
}

/* =========================
   REFERRALS
========================= */

function frens() {

  shell(`

    <h2 class="title">
      👥 Referral Network
    </h2>

    <div
      class="card"
      style="padding:20px"
    >

      <div class="muted">
        Your invite link
      </div>

      <p style="word-break:break-all">
        t.me/SpiderNetworkBot?start=AKASH128
      </p>

      <button
        class="btn"
        onclick="copyReferral()"
      >
        Copy Link
      </button>

      <div class="stats">

        <div class="stat">
          <span>Friends</span>
          <b>${friends}</b>
        </div>

        <div class="stat">
          <span>Referral Earned</span>
          <b>${referralEarned} USDT</b>
        </div>

      </div>

    </div>

    <h2 class="title">
      🏆 Top Friends
    </h2>

    <div class="card list">

      ${[
        ["SpiderKing", "42 invited", "22.5 USDT"],
        ["WebMaster", "35 invited", "18.0 USDT"],
        ["SpiderQueen", "27 invited", "14.5 USDT"]
      ].map((user, index) => `

        <div class="item row">

          <div>

            <b>
              ${index + 1}. ${user[0]}
            </b>

            <div class="muted">
              ${user[1]}
            </div>

          </div>

          <span>
            ${user[2]}
          </span>

        </div>

      `).join("")}

    </div>

  `);
}

function copyReferral() {

  const link =
    "https://t.me/SpiderNetworkBot?start=AKASH128";

  if (navigator.clipboard) {

    navigator.clipboard.writeText(link);

  }

  alert("Demo referral link copied!");
}

/* =========================
   NFT
========================= */

function nfts() {

  const collection = [

    ["Golden Web #001", "12.50 USDT", "Rare"],

    ["Shadow Spider #014", "25.00 USDT", "Epic"],

    ["Royal Spider #077", "50.00 USDT", "Legendary"]

  ];

  shell(`

    <h2 class="title">
      🖼️ Spider NFT Hub
    </h2>

    <div class="notice">

      Preview collection only.
      No real blockchain purchase is performed
      in this Vercel demo.

    </div>

    ${collection.map(nft => `

      <div class="nft">

        <div class="art">
          🕷️
        </div>

        <div>

          <b>
            ${nft[0]}
          </b>

          <div class="muted">
            ${nft[2]}
          </div>

        </div>

        <span class="pill">
          ${nft[1]}
        </span>

      </div>

    `).join("")}

    <button
      class="btn full"
      onclick="connectWallet()"
    >
      🔗 Connect Wallet
    </button>

  `);
}

function connectWallet() {

  alert(
    "Wallet connection is disabled in this frontend preview."
  );
}

/* =========================
   PROFILE
========================= */

function profile() {

  shell(`

    <div class="card profile">

      <div class="pfp">
        🕷️
      </div>

      <h1>
        SPIDER KING
      </h1>

      <div class="muted">
        @username
      </div>

      <div
        class="gold"
        style="margin-top:12px"
      >
        🏆 TOP GLOBAL #${rank}
      </div>

      <div class="stats">

        <div class="stat">
          <span>Total Earned</span>
          <b>${balance.toFixed(2)} USDT</b>
        </div>

        <div class="stat">
          <span>Friends</span>
          <b>${friends}</b>
        </div>

        <div class="stat">
          <span>Games</span>
          <b>46</b>
        </div>

        <div class="stat">
          <span>Tasks</span>
          <b>82</b>
        </div>

      </div>

    </div>

    <h2 class="title">
      Profile Settings
    </h2>

    <div class="card list">

      <div class="item row">
        🌐 Language
        <b>English ›</b>
      </div>

      <div class="item row">
        🏆 Global Ranking
        <b>#${rank}</b>
      </div>

      <div class="item row">
        👥 Friends
        <b>${friends}</b>
      </div>

      <div class="item row">
        💳 Wallet
        <b>Not connected</b>
      </div>

    </div>

  `);
}

/* =========================
   START APP
========================= */

home();
