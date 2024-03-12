function generateRandomLetters() {
    let letters = 'QWERTYUIOPASDFGHJKLZXCVBNM123456790%@#'.split(' ').join('');
    let randomLetters = '';
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * letters.length);
        randomLetters += letters[randomIndex];
    }
    return randomLetters;
}

const word = generateRandomLetters();
var gameBoard = document.getElementById('container');
let currentRow = 0;

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        var cell = document.createElement('div');
        cell.className = 'cell';
        gameBoard.appendChild(cell);
    }
}

document.getElementById('submit-guess').onclick = function () {
    var guess = document.getElementById('guess-input').value.toUpperCase();
    if (guess.length < 5) {
        alert('Guess must be 5 letters long!');
    } else {
        let correct_count = 0;
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === word[i]) {
                correct_count++;
                let cell = gameBoard.children[(currentRow * 5) + i];
                cell.innerHTML = guess[i];
                cell.style.backgroundColor = '#6de38c';
            } else {
                let letter = guess[i];
                let index = word.indexOf(letter);
                if (index !== -1) {
                    let cell = gameBoard.children[(currentRow * 5) + i];
                    cell.innerHTML = guess[i];
                    cell.style.backgroundColor = '#cfcc1d';
                } else {
                    let cell = gameBoard.children[(currentRow * 5) + i];
                    cell.innerHTML = guess[i];
                    cell.style.backgroundColor = '#9e9e9e';
                }
            }
        }
        document.getElementById('guess-input').value = '';
        currentRow++;
        if (currentRow === 5) {
            alert(`You lost. The word was ${word}`);
        }
    }
}