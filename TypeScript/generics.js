//generics are used to achive the type safety
/*
    function fun_one<T>(arg1:T):void{
        console.log( arg1 );
    };
    fun_one<string>("Hello_1");
    fun_one<number>(100);
    fun_one<boolean>(true);
    fun_one<any>({"key1":"Hello_1"});
*/
/*
    function fun_one<A,B>(arg1:A,arg2:B):void{
        console.log( arg1, arg2 );
    };
    fun_one<string,number>("Hello",100);

    //fun_one<string,number>(100,"Hello_1");
    //Argument of type 'number' is not assignable to parameter of type 'string'.

    fun_one<any,any>("Hello_1","Hello_2");
*/
/*
    class class_one<A,B,C>{
        var_one:A;
        var_two:B;
        var_three:C;

        constructor(arg1:A, arg2:B, arg3:C){
            this.var_one = arg1;
            this.var_two = arg2;
            this.var_three = arg3;
        }
    };

    let obj:class_one<any,any,any> = new class_one<any,any,any>({key:"Hello_1"},
                                                                {key:"Hello_2"},
                                                                {key:"Hello_3"});
    console.log( obj.var_one.key,
                obj.var_two.key,
                obj.var_three.key );    //Hello_1 Hello_2 Hello_3
*/
/*
    interface interface1<A,B>{
        fun_one():A;
        fun_two():B;
    };

    let obj:interface1<any,any> = {
        fun_one : ():any=>{
            return "Hello_1";
        },
        fun_two : ():any=>{
            return "Hello_2";
        }
    };

    console.log( obj.fun_one(), obj.fun_two() );
*/
function fun_one(arg1, arg2) {
    console.log(arg1, arg2);
}
;
fun_one("Hello_1", "Hello_2");
fun_one(100, "Hello_2");
fun_one({}, "Hello");
