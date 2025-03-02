document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

function jump() {
    const mario = document.querySelector('.mario');
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}
