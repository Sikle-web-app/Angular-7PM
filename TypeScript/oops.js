//class
//collection of variables and functions
//we can declare classes by using "class" keyword
//we can create the object to the class by using "new" keyword
//encapsulation of variables and functions called as class
//recomended modifier for variables is "private".
//recomemded modifier for functions is "public"
//we can define constructor by usingb "constructor" keyword
//we can refer current class members by using "this" keyword
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
/*
    class class_one{
        private sub_one:string;
        private sub_two:string;
        private sub_three:string;
        constructor(){
            this.sub_one = "Angular11";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        };
        public getSubOne():string{
            return this.sub_one;
        };
        public getSubTwo():string{
            return this.sub_two;
        };
        public getSubThree():string{
            return this.sub_three;
        };
    };
    let obj1:class_one = new class_one();
    console.log( obj1.getSubOne(), obj1.getSubTwo(), obj1.getSubThree() );
*/
/*
    class class_one{
        constructor(public arg1:string,
                    public arg2:string,
                    public arg3:string){}
    };
    let obj1:class_one = new class_one("Angular11","NodeJS","MongoDB");
    console.log( obj1.arg1, obj1.arg2, obj1.arg3 );

    let obj2:class_one = new class_one("ReactJS","Deno","CassandraDB");
    console.log( obj2.arg1, obj2.arg2, obj2.arg3 );

    let obj3:class_one = new class_one("VueJS","NodeJS","MySQL");
    console.log( obj3.arg1, obj3.arg2, obj3.arg3 );
*/
//inheritance
//accessing the data from parent class to child class called as inheritance
//single level inheritance
/*
    class Parent{
        var_one:string = "Hello_1";
        fun_one():string{
            return "Hello_2";
        };
    };

    class Child extends Parent{
        var_two:string = "Hello_3";
        fun_two():string{
            return "Hello_4";
        };
    };

    let obj:Child = new Child();
    console.log(
        obj.var_one,
        obj.var_two,
        obj.fun_one(),
        obj.fun_two()
    );
*/
/*
class Parent{
    meanFun():any{
        return {"key1":"Angular"};
    };
};

class Child extends Parent{
    mernFun():any{
        return {"key1":"ReactJS"};
    }
};

class SubChild extends Child{
    mevnFun():any{
        return {"key1":"VueJS"};
    };
};

let obj:SubChild = new SubChild();
console.log( obj.meanFun(), obj.mernFun(), obj.mevnFun() );
*/
/*
    class Parent1{}

    class Parent2{}

    class Child extends Parent1,Parent2{}
    //Multiple Inheritance Not Supported by TypeScript
*/
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.fun_one = function () {
        return "Parent !!!";
    };
    ;
    return Parent;
}());
;
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child1.prototype.fun_two = function () {
        return "Child1 !!!";
    };
    ;
    return Child1;
}(Parent));
;
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child2.prototype.fun_two = function () {
        return "Child2 !!!";
    };
    ;
    return Child2;
}(Parent));
;
var Child3 = /** @class */ (function (_super) {
    __extends(Child3, _super);
    function Child3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child3.prototype.fun_two = function () {
        return "Child3 !!!";
    };
    ;
    return Child3;
}(Parent));
;
var obj1 = new Child1();
console.log(obj1.fun_one(), obj1.fun_two());
var obj2 = new Child2();
console.log(obj2.fun_one(), obj2.fun_two());
var obj3 = new Child3();
console.log(obj3.fun_one(), obj3.fun_two());
