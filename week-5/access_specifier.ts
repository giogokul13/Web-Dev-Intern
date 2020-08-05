class company{
    emps(emps: any) {
        throw new Error("Method not implemented.");
    }
    private cid:number;
    cname:string;
    constructor(id:number,name:string){
        this.cid = id;
        this.cname = name;
    }
    comdet(){
        console.log(" company id : " + this.cid);
        console.log('company name : ' + this.cname);
    }
}
var c1 = new company(111,"Uipep Tech.");
c1.comdet();
//console.log(c1.cid);  // error generated cannot access the private member