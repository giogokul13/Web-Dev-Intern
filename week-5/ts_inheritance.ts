class Bike
{   onroad:number;
    sound:string;

    constructor(private name:string ,private brand:string ,private model:string ,private price:number ){
        this.onroad = price + 20000;
    }

    bikedetails(){
        console.log(" Bike name :" + this.name);
        console.log("Brand :" + this.brand);
        console.log("model: "+this.model)
        console.log("Ex- Showroom price :"+ this.price);
        console.log("Onroad price :" + this .onroad);
    }

    exhaustnote(sound:string){
        console.log(this.sound=sound);
    }
}

class Showroom extends Bike
{   place:string;

    getshowdet(place:string){
        this.place = place;
    }
    showroomdet(){
        super.bikedetails();
        console.log("place :" + this.place);
        console.log("=========================================================");

 
    }
}
var r15 = new Showroom("R15","YAMAHA","R15 V3",150000);
r15.getshowdet("Hosur");
r15.showroomdet();

