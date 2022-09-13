const gridContainer = document.getElementById('gridContainer');
const newbtn = document.getElementById('newGame');
const anotherbtn = document.getElementById('anotherGame');
const game = document.getElementById('game');

const dtime = document.getElementById('time');
const dscore = document.getElementById('score');
let score = 0;
let time = 15;
let interval;

newbtn.addEventListener('click', newGame);
function newGame () {
    grid();
    newbtn.style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    dot();
    clicksq();
    interval = setInterval(timer, 1000);
}

function grid () {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add(i);
        gridContainer.appendChild(square);
    }
}

function timer () {
    time--;
    dtime.innerHTML = 'Time: ' + time;
    if (time <= 0) {
        if (score < 10) {
            gridContainer.style.display = 'none';
            game.innerHTML = 'Time is up! That was an embarasing performance. Your score was a lousy ' + score;
        } else if (score > 20) {
            gridContainer.style.display = 'none';
            game.innerHTML = 'Time is up! That was a great performance! You scored ' + score;
        } else if (score > 15) {
            gridContainer.style.display = 'none';
            game.innerHTML = 'Time is up! Solid performance. You scored ' + score;
        } else if (score > 10) {
            gridContainer.style.display = 'none';
            game.innerHTML = 'Time is up. Twas a decent performance. You scored ' + score;
        } else {
            gridContainer.style.display = 'none';
            game.innerHTML = 'time is up. Your final score is ' + score;
        }
        endgame();
    }
}

function endgame () {
    clearInterval(interval);
    anotherbtn.style.display = 'block';
}

function dot () {
    const num = Math.floor(Math.random() * 64);
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < 64; i++) {
        if(squares[i].classList[1] == num) {
            squares[i].classList.add('it');
        }
    }
}

function clicksq () {
    const squares = document.querySelectorAll('.square');
    for(let i = 0; i < 64; i++) {
        squares[i].addEventListener('click', function() {
            if (squares[i].classList[2] == 'it') {
                score++;
                dscore.innerHTML = 'Score: ' + score;
                squares[i].classList.remove('it');
                dot();
            }
        });
    }
}

anotherbtn.addEventListener('click', anotherGame);
function anotherGame () {
    window.location.reload();
}