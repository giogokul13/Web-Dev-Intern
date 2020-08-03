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
        console.log("=========================================================");
    }

    exhaustnote(sound:string){
        console.log(this.sound=sound);
    }
}

var r15 = new Bike("R15","YAMAHA","R15 V3",150000);
r15.bikedetails();
r15.exhaustnote("vrooom vroom vroooooooooom");

var bullet = new Bike("Royal Enfield classic 350","Royal Enfield","classic 350",250000);
bullet.bikedetails();
r15.exhaustnote("dub dunb dub ");