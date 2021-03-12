//behaves like many called as polymorphism
//1) function overloading (static polymorphism)
//2) function overriding (dynamic polymorphism)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//static polymorphsim / function overloading
//more than one function with same name
//with same signature (same number of arguments)
//but different datatypes
/*
class class_one{
    display(arg1:string,arg2:string):any;

    display(arg1:number,arg2:number):any;

    display(arg1:boolean,arg2:boolean):any;

    display(arg1:any,arg2:any):any{
        return arg1+"   "+arg2;
    };
};

let obj:class_one  = new class_one();
console.log( obj.display("Hello_1","Hello_2") );
console.log( obj.display(true,false) );
console.log( obj.display(100,200) );
*/
//function overriding
//overriding the parent class functionality with child class functionality
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.dbFun = function () {
        return "MongoDB Data Soon...!";
    };
    ;
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.dbFun = function () {
        return "Cassandra DB Data Soon....!";
    };
    ;
    return class_two;
}(class_one));
;
var obj = new class_two();
console.log(obj.dbFun());
