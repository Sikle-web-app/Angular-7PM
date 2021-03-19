// namespace AshokIT{
//     export let wish:string = `welcome to ecommerce application`;
// };
;
/*
    /// <reference path="file1.ts" />
    console.log( AshokIT.wish );
*/
/*
    /// <reference path="file1.ts" />
    console.log(
        AshokIT.FullStack.var_one,
        AshokIT.FullStack.var_two,
        AshokIT.FullStack.var_three
    );
*/
/*
    /// <reference path="file1.ts" />
    console.log(
        AshokIT.fun_one(),
        AshokIT.fun_two(),
        AshokIT.fun_three()
    );   //Angular12 NodeJS MongoDB
*/
/*
    /// <reference path="file1.ts" />
    let obj:Outer.Inner.class_one = new Outer.Inner.class_one();
    console.log( obj.fun_one() );
*/
/// <reference path="file1.ts" />
var obj = {
    fun_one: function () {
        return "Angular11";
    },
    fun_two: function () {
        return "Deno";
    },
    fun_three: function () {
        return "MongoDB";
    }
};
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return "Hello_1";
    };
    ;
    class_one.prototype.fun_two = function () {
        return "Hello_2";
    };
    ;
    class_one.prototype.fun_three = function () {
        return "Hello_3";
    };
    ;
    return class_one;
}());
;
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
var obj1 = new class_one();
console.log(obj1.fun_one(), obj1.fun_two(), obj1.fun_three());
