"use strict";

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let game = function() {
    let number = 30;
    let userNumber = prompt("Угадайте загаданное число!");
    
    if (userNumber === null) {
        return alert("Игра окончена");
    }

    if (!isNumber(userNumber)) {
        alert("Введи число!");
        game();
    }

    if (+userNumber > number) {
        alert("Загаданное число меньше");
        game();
    }

    if (+userNumber < number) {
        alert("Загаданное число больше");
        game();
    }

    if (+userNumber === number) {
        alert("Поздравляю, Вы угадали!!!");
    }
};

game();