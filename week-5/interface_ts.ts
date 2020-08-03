interface shape{
    area()
}

class square implements shape{
    constructor(private len:number)
    {}
    area(){
        console.log("Area of square : "+ this.len * this.len);
    }
}

class rectangle implements shape{
    constructor(private len:number,private bre:number,private hei:number){}

    area(){
        console.log("area of rectangle :" + this.len * this.bre * this.hei);
    }

}

var sq : shape = new square(10);
sq.area();
var rec: shape = new rectangle(1,2,3);
rec.area();
