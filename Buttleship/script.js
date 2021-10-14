
var view = {
    displayMessage: function (msg) {
        document.getElementById("messageArea").innerHTML = msg;

    },
    displayHit: function (location) {
        document.getElementById(location).setAttribute("class", "hit");
        view.displayMessage("Попал");
    },
    displayMiss: function (location) {
        document.getElementById(location).setAttribute("class", "miss");
        view.displayMessage("Мимо");
    }
};



var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    shots: [],
    ships: [
        { locations: ["0", "0", "0"], hits: ["", "", ""] },
        { locations: ["0", "0", "0"], hits: ["", "", ""] },
        { locations: ["0", "0", "0"], hits: ["", "", ""] }],
    fire: function (guess) {
        for (var i = 0; i < this.ships.length; i++) {
            if (this.ships[i].locations.indexOf(guess) >= 0) {
                this.ships[i].hits[this.ships[i].locations.indexOf(guess)] = "hit";
                view.displayHit(guess)
                if (this.isSunk(this.ships[i])) {
                    view.displayMessage("Вы потопили корабль");
                    this.shipsSunk++;
                }
                return true;
            };

        }
        view.displayMiss(guess);
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        } return true;
    },
    generateShipLocations: function () {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },
    generateShip: function () {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        if (direction === 1) {
            // Сгенерировать начальную позицию для горизонтального корабля
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - 3));
        } else {
            // Сгенерировать начальную позицию для вертикального корабля
            row = Math.floor(Math.random() * (this.boardSize - 3));
            col = Math.floor(Math.random() * this.boardSize);
        }
        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
                // добавить в массив для горизонтального корабля
            } else {
                newShipLocations.push((row + i) + "" + col);
                // добавить в массив для вертикального корабля
            }
        }
        return newShipLocations;
    },
    collision: function (locations) {
        for (var i = 0; i < this.numShips; i++) {
            for (var j = 0; j < locations.length; j++) {
                if (model.ships[i].locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};






var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk == model.numShips) {
                view.displayMessage("Вы потопили все корабли за " + this.guesses + " поыток!");
                alert("Вы потопили все корабли за " + this.guesses + " поыток!");
            }
        }
    }

};

function parseGuess(guess) {
    var firstGuess = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess == null || guess.length !== 2) {
        alert("Введите 2 знака из буквы и цифры");
    } else {
        firstLetter = guess.charAt(0);
        second = guess.charAt(1);
    };
    if (firstGuess.indexOf(firstLetter) < 0 || second < 0 || second >= model.boardSize || isNaN(second)) {
        alert("Введите букву с диапазона A-G и число от 0 до 6");
        return null;
    } else {
        first = firstGuess.indexOf(firstLetter);
        return first + second;
    }
};

function init() {
    model.shots = [];
    model.generateShipLocations();
    //document.getElementById("fireButton").onclick = handleFireButton;
    // document.getElementById("guessInput").onkeypress = handleKeyPress;
    var tags = document.getElementsByTagName("td");
    for (let i = 0; i < tags.length; i++) {
        tags[i].onclick = ShootTheButtle;

    }
};

window.onload = init;

function handleFireButton() {
    controller.processGuess(document.getElementById("guessInput").value);


    if (model.shots.indexOf(document.getElementById("guessInput").value) >= 0) {
        alert("Вы уже стреляли по этой клетке!")
    };
    model.shots.push(document.getElementById("guessInput").value);
    document.getElementById("guessInput").value = "";
};
function handleKeyPress(t) {
    var fireButton = document.getElementById("fireButton");
    if (t.keyCode === 13) {
        fireButton.click();
        return false;
    }
};

// function clickTheButtle() {
//     var tags = document.getElementsByTagName("td");
//     for (let i = 0; i < tags.lengtht; i++) {
//         tags[i].onclick = ShootTheButtle;

//     }

// };

function ShootTheButtle(ElemObj) {
    model.fire(ElemObj.target.id);
    //console.log(ElemObj.target.id);
};


//console.log(tags);
//controller.processGuess("A1");


