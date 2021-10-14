var fiat = {
    make: "Fiat",
    model: "500",
    started: false,
    fuel: 0,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " +
                    this.model + " едет");
                this.fuel = this.fuel - 1;
            } else {
                alert("Нет бензина");
                this.stop();
            }
        } else {
            alert("Вы должны сперва завести авто");
        }
    },
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;

    }
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
