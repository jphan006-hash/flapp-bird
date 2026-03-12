const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

<body>
    <canvas id="gameCanvas" width="320" height="480"></canvas>
    <script>
        
    

const bird = {
    x: 50,
    y: 150,
    width: 30,
    height: 30,
    gravity: 0.6,
    velocity: 0,
    jump: -8
};

// Function to draw the bird
function drawBird() {
    ctx.fillStyle = '#FF5733';
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

// Game Loop
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply gravity
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    // Optional: Keep bird within canvas bounds (simple collision)
    if (bird.y > canvas.height - bird.height || bird.y < 0) {
        bird.y = Math.max(0, Math.min(canvas.height - bird.height, bird.y));
        bird.velocity = 0; // Stop movement if it hits the floor/ceiling
    }

    // Draw bird
    drawBird();

    // Call the game loop again
    requestAnimationFrame(gameLoop);
}

// Controls
window.addEventListener('keydown', () => {
    bird.velocity = bird.jump;
});
</body>
</script>
// Start the game
gameLoop();
