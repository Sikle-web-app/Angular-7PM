//behaves like many called as polymorphism
//1) function overloading (static polymorphism)
//2) function overriding (dynamic polymorphism)

//static polymorphsim / function overloading
//more than one function with same name
//with same signature (same number of arguments)
//but different datatypes

/*
class class_one{
    display(arg1:string,arg2:string):any;

    display(arg1:number,arg2:number):any;

    display(arg1:boolean,arg2:boolean):any;

    display(arg1:any,arg2:any):any{
        return arg1+"   "+arg2;
    };
};

let obj:class_one  = new class_one();
console.log( obj.display("Hello_1","Hello_2") );
console.log( obj.display(true,false) );
console.log( obj.display(100,200) );
*/

//function overriding
//overriding the parent class functionality with child class functionality

class class_one{
    dbFun():string{
        return `MongoDB Data Soon...!`;
    };
};

class class_two extends class_one{
    dbFun():string{
        return "Cassandra DB Data Soon....!";
    };
};

let obj:class_two = new class_two();
console.log( obj.dbFun() );






