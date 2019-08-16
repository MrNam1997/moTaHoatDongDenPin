let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function () {
        return this.energy;
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    }
};
let flashLamp = function (pin) {
    this.isOff=true;
    this.turnOnOff = function () {
        if(pin.getEnergy()>0){
            if (this.isOff){
                this.isOff=false;
                pin.decreaseEnergy();
                return 'den bat';
            } else {
                this.isOff=true;
                return 'den tat'
            }
        } else {
            return 'het pin roi!';
        }
    }
};

let pin = new Battery();
pin.setEnergy(10);
let lamp = new flashLamp(pin);

function turnOnOff() {
    document.getElementById('display').innerHTML = lamp.turnOnOff() +
        '<br>' +  pin.getEnergy() +"%";
}

