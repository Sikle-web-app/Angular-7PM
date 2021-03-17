/*
    1) super

    2) this

    3) static

    4) readonly
*/

//"super"
//"super" keyword is used to refer the parent class members and constructor also

/*
    class class_one{
        var_one:string;
        constructor(arg1:string){
            this.var_one = arg1;
        };
    };
    class class_two extends class_one{
        constructor(){
            super("Hello");
        };
    }
    console.log( new class_two().var_one );   //Hello
*/


/*
    class class_one{
        var_one:any;
        constructor(arg1:any){
            this.var_one = arg1;
        };
    };

    class class_two extends class_one{
        var_two:any;
        constructor(param1:any,param2:any){
            super(param1);  
            this.var_two = param2;
        };
    }

    let obj:class_two = new class_two({key:"Hello_1"},{key:"Hello_2"});
    console.log( obj.var_one.key, obj.var_two.key );
    //Hello_1 Hello_2
*/

/*
    class class_one{
        fun_one():any{
            return "Hello_1";
        };
    };

    class class_two extends class_one{
        fun_two():any{
        return super.fun_one(); 
        }
    };

    let obj:class_two = new class_two();
    console.log( obj.fun_two() );
*/


//static
//static members, we can access directly by class name.
//static members we can't access by using class objects.
//we can't initilize static members by using constuctor


/*
    class clas_one{
        static var_one:string;
        constructor(){
            this.var_one = "Hello";
        };
    };
    //Property 'var_one' does not exist on type 'clas_one'. Did you mean to access the static member 'clas_one.var_one'
*/

/*
    class class_one{
        static var_one:string = "Hello";
    };
    new class_one().var_one;
    //Property 'var_one' does not exist on type 'class_one'. Did you mean to access the static member 'class_one.var_one'
*/

/*
    class class_one{
        static var_one:string = "Hello";
    };
    console.log(  class_one.var_one );   //Hello
*/

/*
    class class_one{
        //declare private constructor
        private constructor(){}
        //if constructor is private, we can't create object at outside

        //create fun_one()  (not static function)
        //if function is non static, we must access with class object only
        fun_one():any{
            return "hello";
        };

        //create static function
        static fun_two():any{
            return new class_one();
        };
    };
    console.log( class_one.fun_two().fun_one() )
*/




//readonly
//readonly is the keyword available in TypeScript
//we have only "read" access but we dont have "write" access
//we can "initilize" readonly members by using "constructor"
class class_one{
    readonly var_one:string;
    constructor(){
        this.var_one = "Hello";
    };
};
new class_one().var_one;    //read access

new class_one().var_one = "Hi";   //not write access




















































































