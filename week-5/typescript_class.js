var Bike = /** @class */ (function () {
    function Bike(name, brand, model, price) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.onroad = price + 20000;
    }
    Bike.prototype.bikedetails = function () {
        console.log(" Bike name :" + this.name);
        console.log("Brand :" + this.brand);
        console.log("model: " + this.model);
        console.log("Ex- Showroom price :" + this.price);
        console.log("Onroad price :" + this.onroad);
        console.log("=========================================================");
    };
    Bike.prototype.exhaustnote = function (sound) {
        console.log(this.sound = sound);
    };
    return Bike;
}());
var r15 = new Bike("R15", "YAMAHA", "R15 V3", 150000);
r15.bikedetails();
r15.exhaustnote("vrooom vroom vroooooooooom");
var bullet = new Bike("Royal Enfield classic 350", "Royal Enfield", "classic 350", 250000);
bullet.bikedetails();
r15.exhaustnote("dub dunb dub ");
