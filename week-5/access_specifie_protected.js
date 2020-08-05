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
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    return Employee;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee(name, code, department) {
        var _this = _super.call(this, name, code) || this;
        _this.department = department;
        return _this;
    }
    SalesEmployee.prototype.departmentdet = function () {
        console.log("Department : " + this.department);
    };
    SalesEmployee.prototype.details = function () {
        console.log("empcode :" + this.empCode);
        console.log("Empname :" + this.empName);
    };
    return SalesEmployee;
}(Employee));
var a = new SalesEmployee("Gokul", 123, "marketing");
a.details();
a.departmentdet();
// a.empCode;  // protected member 
