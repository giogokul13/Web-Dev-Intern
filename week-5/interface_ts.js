var square = /** @class */ (function () {
    function square(len) {
        this.len = len;
    }
    square.prototype.area = function () {
        console.log("Area of square : " + this.len * this.len);
    };
    return square;
}());
var rectangle = /** @class */ (function () {
    function rectangle(len, bre, hei) {
        this.len = len;
        this.bre = bre;
        this.hei = hei;
    }
    rectangle.prototype.area = function () {
        console.log("area of rectangle :" + this.len * this.bre * this.hei);
    };
    return rectangle;
}());
var sq = new square(10);
sq.area();
var rec = new rectangle(1, 2, 3);
rec.area();
