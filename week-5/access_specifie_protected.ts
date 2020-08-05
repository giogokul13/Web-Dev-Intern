
class Employee {
     empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }

    // details(){
    //     console.log("empcode :" + this.empCode);
    //     console.log("Empname :"+this.empName);
    
}

class SalesEmployee extends Employee{
    private department: string;
    
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
    departmentdet(){
        console.log("Department : "+this.department);    
    }
    details(){
        console.log("empcode :" + this.empCode);
        console.log("Empname :"+this.empName);
}
}
var a =new SalesEmployee("Gokul", 123,"marketing");
a.details();
a.departmentdet();
// a.empCode;  // protected member 