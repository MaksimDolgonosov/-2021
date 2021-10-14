var position1 = Math.floor(Math.random() * 7);
var position2 = position1 + 1;
var position3 = position1 + 2;
var guess = 0;
var trying = 0;

while (guess != 3) {
    var shoot = prompt("Введите число от 0 до 6");
    if (shoot < 0 || shoot > 6) {
        alert("Введите корректное число");
    } else {
        trying = trying + 1;
        if (shoot == position1 || shoot == position2 || shoot == position3) {
            alert("Попал");
            guess = guess + 1;
            if (guess == 3) {
                alert("Убит.Игра закончена");
            }
        } else {
            alert("Мимо");
        }


    }
}
alert("Вы убили корабль за " + trying + " попыток. Ваш процент попадания равен " + guess / trying * 100 + "%");
