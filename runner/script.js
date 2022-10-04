const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');

const jump = () => {

    player.classList.add('jump');

    setTimeout(() => {

        player.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const obstaclepos = obstacle.offsetLeft;

    if (obstaclepos <= 80) (

        obstacle.style.animation = 'none'
            (obstacle.style.left = `${obstaclepos}px`)
    )

}, 10);

document.addEventListener('keydown', jump);