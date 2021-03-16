//public  protected  private
//the default modifier is public
//we can access public members anywhere in application
//all public members by default available to child classes
//we can access public members by using class objects
//public modifier applicable to variables, functions and constructor
//Note : public modifier not applicable to classes
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
//public class class_one{}  //'public' modifier cannot appear on a module or namespace element.
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello_1";
    }
    ;
    class_one.prototype.fun_one = function () {
        return this.var_one;
    };
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return class_two;
}(class_one));
;
var obj = new class_two();
console.log(obj.var_one, obj.fun_one());
