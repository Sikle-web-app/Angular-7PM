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
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.meanFun = function () {
        return { "key1": "Angular" };
    };
    ;
    return Parent;
}());
;
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.mernFun = function () {
        return { "key1": "ReactJS" };
    };
    return Child;
}(Parent));
;
var SubChild = /** @class */ (function (_super) {
    __extends(SubChild, _super);
    function SubChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubChild.prototype.mevnFun = function () {
        return { "key1": "VueJS" };
    };
    ;
    return SubChild;
}(Child));
;
var obj = new SubChild();
console.log(obj.meanFun(), obj.mernFun(), obj.mevnFun());
