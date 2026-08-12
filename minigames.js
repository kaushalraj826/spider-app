let tttBoard = ['', '', '', '', '', '', '', '', ''];
let isPlayerTurn = true;

function openPvPArena() {
    document.getElementById('pvpModal').style.display = 'flex';
    tttBoard = ['', '', '', '', '', '', '', '', ''];
    renderTTT();
}

function makeMove(idx) {
    if(tttBoard[idx] === '' && isPlayerTurn) {
        tttBoard[idx] = 'X';
        renderTTT();
        setTimeout(() => {
            let empty = tttBoard.map((v, i) => v === '' ? i : null).filter(v => v !== null);
            if(empty.length > 0) {
                tttBoard[empty[Math.floor(Math.random()*empty.length)]] = 'O';
                renderTTT();
            }
        }, 400);
    }
}

function renderTTT() {
    let cells = document.querySelectorAll('.ttt-cell');
    cells.forEach((c, i) => { 
        c.innerText = tttBoard[i]; 
        c.style.color = tttBoard[i] === 'X' ? '#ffcc00' : '#ff4444'; 
    });
}

let spins = 2;

function openFortuneWheel() {
    document.getElementById('wheelModal').style.display = 'flex';
}

function spinWheelAction() {
    if(spins <= 0) { alert("No spins left!"); return; }
    spins--;
    let winAmt = 1000;
    balance += winAmt;
    updateBalance();
    document.getElementById('wheel-text').innerText = `Daily Spins Left: ${spins}`;
    alert(`🎉 You won +${winAmt} Spider Coins!`);
}
