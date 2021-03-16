//if we know partial implentations, then we will choose "abstract" classes
//we will represent abstract classes by using "abstract" keyword.
//for abstract classes implementation provided by "child" classes.

/*
    abstract class class_one{
        fun_one():any{
            return "Hello_1";
        };
        abstract fun_two():any;
    };

    class class_two extends class_one{
        fun_two():any{
            return "Hello_2";
        };
    };

    let obj:class_two = new class_two();
    console.log( obj.fun_one(), obj.fun_two() );
*/




/*
    abstract class class_one{
        abstract var_one:string;
    };
    class class_two extends class_one{
        var_one:string = "Hello";
    };
    console.log( new class_two().var_one );
*/

interface interface1{
    var_one:string;
    fun_one():string;
};
abstract class class_one implements interface1{
    var_one:string = "Hello_1";
    fun_one():string{
        return "Hello_2";
    };
    abstract var_two:string;
    abstract fun_two():string;
};
class class_two extends class_one{
    var_two:string = "Hello_3";
    fun_two():string{
        return "Hello_4";
    };
};
let obj:class_two = new class_two();
console.log( obj.var_one, obj.fun_one(), obj.var_two, obj.fun_two() );
//Hello_1 Hello_2 Hello_3 Hello_4




























