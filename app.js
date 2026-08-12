let balance = 23985.75;

function updateBalance() {
    document.getElementById('main-balance').innerText = balance.toFixed(2) + " $SPDR";
}

function switchTab(tabName, element) {
    document.querySelectorAll('.app-container').forEach(el => el.classList.remove('active-tab'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active-tab');
    element.classList.add('active');
    let titles = {home: "SPIDER GENESIS", games: "GAME REALMS", tasks: "DAILY TASKS", friends: "REFERRALS", profile: "NFT MARKETPLACE"};
    document.getElementById('header-title').innerText = titles[tabName];
}

function completeTask(reward, btn) {
    balance += reward;
    updateBalance();
    btn.innerText = "Claimed ✓";
    btn.disabled = true;
}

function sellNFT(nftName) {
    alert(`NFT "${nftName}" listed successfully on marketplace for sale!`);
}
