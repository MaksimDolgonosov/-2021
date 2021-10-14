
function phoneNumber() {
    var number = prompt("Введите номер в формате 123-4567");
    var number1 = number.substring(0, 3);
    var number2 = number.substring(number.length - 4);
    var index = number.indexOf("-")
    var arrayNumber = number.split("-");
    if (number.length < 7 || number.length > 8) {
        return false;
    };
    if (number.length == 8 && (number.charAt(3) != "-" || isNaN(number1) || isNaN(number2))) {
        return false;
    } else if (number.length == 7 && (isNaN(number1) || isNaN(number2))) {
        return false;
    } else {
        return true;
    }
};
console.log(phoneNumber());
