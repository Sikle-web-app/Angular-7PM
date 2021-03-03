//"Component" is the predefined class
//Component class, used to convert the "TypeScript" class equalent "html" tag
//we will use Component class with the help of "@"
//Component class constructor accepting "json" obejct
//"selector" is the key, used to define  the "custom html tag"  Ex. ashokit
//in general, we will call custom html tag in "index.html" file
//templateUrl is the json key, used to link the external template
import { Component } from "@angular/core";
@Component({
    selector : "ashokit",
    templateUrl : "first.component.html"
})
//export is the keyword, used to export the components
export class firstComponent{
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