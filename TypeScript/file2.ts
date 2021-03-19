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

let obj:Demo1.Interface1 = {
    fun_one : ():any=>{
        return "Angular11";
    },
    fun_two : ():any=>{
        return "Deno";
    },
    fun_three : ():any=>{
        return "MongoDB";
    }
};

class class_one implements Demo1.Interface1{
    fun_one():any{
        return "Hello_1";
    };
    fun_two():any{
        return "Hello_2";
    };
    fun_three():any{
        return "Hello_3";
    };
};

console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );

let obj1:class_one = new class_one();
console.log( obj1.fun_one(), obj1.fun_two(), obj1.fun_three() );













































