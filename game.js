let canvas, ctx, animId;
let sX, sY, sVelY, webs, spiderCoins, tokenCoins;

function openWebJump() {
    document.getElementById('webJumpModal').style.display = 'flex';
    canvas = document.getElementById('webCanvas');
    canvas.width = window.innerWidth - 30;
    canvas.height = window.innerHeight - 240;
    ctx = canvas.getContext('2d');

    sX = canvas.width / 2;
    sY = canvas.height - 50;
    sVelY = 0;
    spiderCoins = 4200;
    tokenCoins = 420;

    webs = [
        {x: canvas.width * 0.3, y: canvas.height * 0.65, r: 35, mult: "x1.5"},
        {x: canvas.width * 0.55, y: canvas.height * 0.45, r: 40, mult: "x2.0"},
        {x: canvas.width * 0.75, y: canvas.height * 0.25, r: 45, mult: "x3.0"},
        {x: canvas.width * 0.4, y: canvas.height * 0.25, r: 28, mult: "x1.5"}
    ];

    if(animId) cancelAnimationFrame(animId);
    runWebJumpLoop();
}

function jumpAction() {
    sVelY = -8.5;
}

function moveAction(val) {
    sX += val;
    if(sX < 30) sX = 30;
    if(sX > canvas.width - 30) sX = canvas.width - 30;
}

function runWebJumpLoop() {
    sVelY += 0.3;
    sY += sVelY;
    if(sY > canvas.height - 30) { sY = canvas.height - 30; sVelY = 0; }
    if(sY < 30) sY = 30;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
    ctx.lineWidth = 1;
    for(let i=0; i<webs.length; i++) {
        for(let j=i+1; j<webs.length; j++) {
            ctx.beginPath();
            ctx.moveTo(webs[i].x, webs[i].y);
            ctx.lineTo(webs[j].x, webs[j].y);
            ctx.stroke();
        }
    }

    for(let w of webs) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.r, 0, Math.PI * 2);
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#0a0a0a';
        ctx.fill();

        ctx.fillStyle = '#ffcc00';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(w.mult, w.x, w.y);
        ctx.restore();

        let dx = sX - w.x;
        let dy = sY - w.y;
        if(Math.sqrt(dx*dx + dy*dy) < w.r + 15) {
            spiderCoins += 100;
            tokenCoins += 5;
            document.getElementById('spider-coins').innerText = spiderCoins;
            document.getElementById('token-coins').innerText = tokenCoins;
            w.x = Math.random() * (canvas.width - 80) + 40;
            w.y = Math.random() * (canvas.height - 120) + 40;
        }
    }

    ctx.strokeStyle = 'rgba(255, 204, 0, 0.4)';
    ctx.beginPath(); ctx.moveTo(sX, sY); ctx.lineTo(sX, sY - 40); ctx.stroke();
    ctx.font = '28px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText("🕷️", sX, sY);

    animId = requestAnimationFrame(runWebJumpLoop);
}

function closeWebJump() {
    cancelAnimationFrame(animId);
    let earned = spiderCoins - 4200;
    if(earned > 0) {
        balance += earned;
        updateBalance();
    }
    document.getElementById('webJumpModal').style.display = 'none';
}
