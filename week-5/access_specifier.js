var company = /** @class */ (function () {
    function company(id, name) {
        this.cid = id;
        this.cname = name;
    }
    company.prototype.comdet = function () {
        console.log(" company id : " + this.cid);
        console.log('company name : ' + this.cname);
    };
    return company;
}());
var c1 = new company(111, "Uipep Tech.");
c1.comdet();
