//public  protected  private
//the default modifier is public
//we can access public members anywhere in application
//all public members by default available to child classes
//we can access public members by using class objects
//public modifier applicable to variables, functions and constructor
//Note : public modifier not applicable to classes

//public class class_one{}  //'public' modifier cannot appear on a module or namespace element.

/*
    class class_one{
        public var_one:string;
        public constructor(){
            this.var_one = "Hello_1";
        };
        public fun_one():string{
            return this.var_one;
        }
    };
    class class_two extends class_one{};

    let obj:class_two = new class_two();
    console.log( obj.var_one, obj.fun_one() );
*/


//private
//private members, we can access with the class.
//we can access private members with "this" keyword with in the class.
//private modifier applicable to variables, functions and constructor
//Note : private modifier not applicable to classes
//private members won't accessable in child classes
//private members we can't access by using class objects
//we can't create object to the private constructor classes

//private class class_one{}  //'private' modifier cannot appear on a module or namespace element.


/*
    class class_one{
        private constructor(){}
    };
    let obj:class_one = new class_one();  //Constructor of class 'class_one' is private and only accessible within the class declaration.
*/


/*
    class class_one{
        private var_one:string = "Hello";
    };

    new class_one().var_one;  //Property 'var_one' is private and only accessible within class 'class_one'.
*/


/*
    class class_one{
        private var_one:string = "Hello";
        private fun_one():string{
            return this.var_one;
        }
    };

    class class_two extends class_one{}

    let obj:class_two = new class_two();
    obj.var_one;
    obj.fun_one();
*/


//protected
//all protected members available to "child" classes
//protected members, we can't access by using class "objects"
//protected modifier applicable to "variables", "functions" and "constructor"
//protected modifier not applicable to "classes"

//protected class class_one{}

/*
    class class_one{
        protected var_one:string="hello";
        protected fun_one():string{
            return "hello2";
        };
    };
    let obj:class_one = new class_one();
    obj.var_one;
    obj.fun_one();
*/

/*
    class class_one{
        protected constructor(){}
    };
    new class_one();
*/

/*
    class class_one{
        protected var_one:string = "Hello_1";
    };

    class class_two extends class_one{}
    new class_two().var_one;
*/

class class_one{
    protected var_one:string = "Hello";
    protected fun_one():string{
        return "Hello_2";
    };
};

class class_two extends class_one{
    var_two = this.var_one;
    my_fun():string{
        return this.fun_one();
    };
};

new class_two().var_two;   //Hello

























































