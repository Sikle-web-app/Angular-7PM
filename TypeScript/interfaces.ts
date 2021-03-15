/*
    interface interface1{
        sub_one:string;
        sub_two:string;
        sub_three:string;
    };

    //JSON
    let obj1:interface1 = {
        sub_one : "Angular11",
        sub_two : "NodeJS",
        sub_three : "MongoDB"
    };

    

    let obj2:interface1 = {
        sub_one : "ReactJS",
        sub_two : "Deno",
        sub_three : "CassandraDB"
    };

    class class_one implements interface1{
        sub_one:string = "VueJS";
        sub_two:string = "NodeJS";
        sub_three:string = "MySQL";
    };

    console.log( obj1.sub_one, obj1.sub_two, obj1.sub_three );
    console.log( obj2.sub_one, obj2.sub_two, obj2.sub_three );

    let obj3:class_one = new class_one();
    console.log( obj3.sub_one, obj3.sub_two, obj3.sub_three );
*/


/*
interface interface1{
    fun_one():string;
    fun_two():number;
    fun_three():any;
};

let obj1:interface1 = {
    fun_one : ():string=>{
        return "Hello_1"
    },
    fun_two : ():number=>{
        return 100;
    },
    fun_three : ():any=>{
        return {"key1":"Hello_2"}
    }
};
console.log( obj1.fun_one(), obj1.fun_two(), obj1.fun_three() );

class class_one implements interface1{
    fun_one():string{
        return "Hello_1";
    };
    fun_two():number{
        return 1000;
    };
    fun_three():any{
        return {"key1":"Hello_1"};
    };
};
let obj:class_one = new class_one();
console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
*/


/*
    //single level inheritance
    interface interface1{
        var_one:string;
    };
    interface interface2 extends interface1{
        var_two:string;
    };
    let obj:interface2 = {
        var_one : "Hello_1",
        var_two : "Hello_2"
    };
    console.log( obj.var_one, obj.var_two );   //Hello_1 Hello_2
*/



/*
    //multi level inheritance
    interface interface1{
        fun_one():any;
    };

    interface interface2 extends interface1{
        fun_two():any;
    };

    interface interface3 extends interface2{
        fun_three():any;
    };

    //class
    class class_one implements interface3{
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
    let obj:class_one = new class_one();
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );
*/


/*
    //multiple inheritance
    interface interface1{
        var_one:string;
    };

    interface interface2{
        var_two:string;
    };

    interface interface3 extends interface1,interface2{
        var_three:string;
    };

    class class_one implements interface3{
        var_one:string = "Hello_1";
        var_two:string = "Hello_2";
        var_three:string = "Hello_3";
    }

    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.var_two, obj.var_three );
*/

/*
    //hirarchal inheritance
    interface interface1{
        var_one:string;
    };

    interface interface2 extends interface1{
        var_two:string;
    };

    interface interface3 extends interface1{
        var_two:string;
    };

    interface interface4 extends interface1{
        var_two:string;
    };

    let obj1:interface2 = {
        var_one : "Hello_1",
        var_two : "Hello_2"
    };

    let obj2:interface3 = {
        var_one : "Welcome_1",
        var_two : "Welcome_2"
    };

    let obj3:interface4 = {
        var_one : "Test_1",
        var_two : "Test_2"
    };

    console.log( obj1.var_one, obj1.var_two );
    console.log( obj2.var_one, obj2.var_two );
    console.log( obj3.var_one, obj3.var_two );
*/

//hybrid inheritance
interface interface1{};

interface interface2 extends interface1{}

interface interface3 extends interface1{}

interface interface4 extends interface2,interface3{}


























































