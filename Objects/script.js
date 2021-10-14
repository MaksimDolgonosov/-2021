//function prequal(car) {
  //  if (car.mileage > 10000) {
  //      return false;
  //  } else if (car.year > 1960) {
  //      return false;
 //   }
  //  return true;
//};

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 9000,
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
                    this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("Uh oh, out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    },
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};

taxi.drive();
taxi.start();
taxi.drive();
taxi.addFuel(1);
taxi.drive();
taxi.drive();
taxi.drive();
taxi.drive();
//for (const prop in taxi) {
//    console.log(prop + " : " + taxi[prop])
//}