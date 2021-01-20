var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var W = 500;
var H = 500;
canvas.width = W;
canvas.height = H;

var block = {
  x: 10,
  y: 10,
  xspeed: Math.random() * 5 + 1,
  yspeed: Math.random() * 5 + 1,
  size: 5
};

window.setInterval(tick, 25);

function tick() {
  drawBlock();
  block.y += block.yspeed;
  block.x += block.xspeed;
  if (block.y <= H - block.size) {
    block.yspeed += 0.25;
  } else {
    block.y = H - block.size;
    block.yspeed *= -0.8;
  }
  if (block.x >= W - block.size || block.x <= block.size) {
    block.xspeed *= 0.9;
    block.x += block.xspeed;
  }
}
function drawBlock() {
  c.fillRect(block.x, block.y, block.size, block.size);
  c.fillStyle = "green";
  c.fill();
}
