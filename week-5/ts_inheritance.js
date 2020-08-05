var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    };
    Bike.prototype.exhaustnote = function (sound) {
        console.log(this.sound = sound);
    };
    return Bike;
}());
var Showroom = /** @class */ (function (_super) {
    __extends(Showroom, _super);
    function Showroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Showroom.prototype.getshowdet = function (place) {
        this.place = place;
    };
    Showroom.prototype.showroomdet = function () {
        _super.prototype.bikedetails.call(this);
        console.log("place :" + this.place);
        console.log("=========================================================");
    };
    return Showroom;
}(Bike));
var r15 = new Showroom("R15", "YAMAHA", "R15 V3", 150000);
r15.getshowdet("Hosur");
r15.showroomdet();
var r3 = new Showroom("R3", "YAMAHA", "R3 2020", 400000);
r3.getshowdet("Bangalore");
r3.showroomdet();
