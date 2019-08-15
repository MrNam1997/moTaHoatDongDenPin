let Battery = function () {
    this.setEnergy = function (ennergy) {
        this.ennergy = ennergy;
    };
    this.getEnergy = function () {
        return this.ennergy;
    };
    this.decreaseEnergy = function () {
        if (this.ennergy > 0) {
            this.ennergy--;
        }
    }
};
let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.bettery = battery;
    };
    this.getBatteryInfo = function () {
        return this.bettery.getEnergy();
    };
    this.light = function () {
        if (this.status) {
            alert("lighting");
        } else {
            alert("Not lighting");
        }
        this.turnOn = function () {
            this.status = true;
        };
        this.turnOff = function () {
            this.status = false;
        }
    }
};

let batterry = new Battery();
batterry.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(batterry);
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br>");
flashLamp.light();
document.write('Turn off+ "<br>"');
flashLamp.turnOff();
flashLamp.light();

