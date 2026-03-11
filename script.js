// game.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Bird character properties
const bird = {
    x: 50,
    y: 150,
    width: 30,
    height: 30,
    gravity: 0.6,
    velocity: 0,
    jump: -8
};

// Load bird image (or draw a simple square if you don't have an image)
const birdImg = new Image();
// Replace with your actual image path
// --- 1. Load Assets ---
const unicornImg = new Image();
unicornImg.src = 'unicorn.png'; // Make sure this path is correct

// --- 2. Update Player Class/Object ---
// In your update/draw function where you draw the bird:
function drawBird() {
    // OLD: ctx.fillStyle = 'yellow'; ctx.arc(...)
    
    // NEW: Draw the unicorn image
    ctx.drawImage(unicornImg, bird.x, bird.y, bird.width, bird.height);
}

// --- 3. Change Background Theme ---
function drawBackground() {
    // Example: A magical purple sky
    ctx.fillStyle = "#8a2be2"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBird() {
    // If you have an image:
    // ctx.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    
    // Fallback: Simple yellow square bird
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

// Game Loop
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply gravity
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    // Draw bird
    drawBird();

    requestAnimationFrame(gameLoop);
}

// Controls
window.addEventListener('keydown', () => {
    bird.velocity = bird.jump;
});

gameLoop();
