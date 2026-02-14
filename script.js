// 🎈 Mostrar carta al hacer clic
document.getElementById('openLetter').addEventListener('click', () => {
  const carta = document.getElementById('carta');
  carta.style.display = carta.style.display === 'block' ? 'none' : 'block';
});

// 💖 Lluvia de corazones
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1,
    color: `hsl(${Math.random() * 360}, 100%, 80%)`
  };
}

function drawHeart(h) {
  ctx.fillStyle = h.color;
  ctx.beginPath();
  ctx.moveTo(h.x, h.y);
  ctx.bezierCurveTo(h.x - h.size / 2, h.y - h.size / 2, h.x - h.size, h.y + h.size / 3, h.x, h.y + h.size);
  ctx.bezierCurveTo(h.x + h.size, h.y + h.size / 3, h.x + h.size / 2, h.y - h.size / 2, h.x, h.y);
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (hearts.length < 150) hearts.push(createHeart());

  hearts.forEach((h, i) => {
    h.y += h.speed;
    drawHeart(h);
    if (h.y > canvas.height) hearts[i] = createHeart();
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
// 🎵 Música automática
window.addEventListener("load", function () {
  const musica = document.getElementById("musica");
  musica.volume = 0.3;
  musica.play().catch(() => {});
});
