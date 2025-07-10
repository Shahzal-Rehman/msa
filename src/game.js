const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 50, y: 300, width: 40, height: 40, dy: 0, gravity: 0.5, jumpPower: -10, grounded: false };

function drawPlayer() {
  ctx.fillStyle = "#0ff";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.dy += player.gravity;
  player.y += player.dy;

  if (player.y + player.height >= canvas.height) {
    player.y = canvas.height - player.height;
    player.dy = 0;
    player.grounded = true;
  }

  drawPlayer();
  requestAnimationFrame(update);
}

document.addEventListener("keydown", e => {
  if (e.code === "Space" && player.grounded) {
    player.dy = player.jumpPower;
    player.grounded = false;
  }
});

update();
