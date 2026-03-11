const bird = document.getElementById('bird');
let birdTop = 250;
let gravity = 2;

function gameLoop() {
    birdTop += gravity;
    bird.style.top = birdTop + 'px';
    requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', () => {
    birdTop -= 50; // Jump height
});

gameLoop();
const bird = new Image();
bird.src = "assets/your-custom-bird.png"; // Make sure the path is correct
// Then, use context.drawImage(bird, ...) in your game loop
