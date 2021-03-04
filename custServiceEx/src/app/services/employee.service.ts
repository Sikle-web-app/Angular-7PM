import { Injectable } from "@angular/core";
@Injectable({
    providedIn : "root"
})
export class employeeService{
    var_one:string;
    var_two:string;
    var_three:string;
    constructor(){
        this.var_one = "Employee Data Soon....!";
        this.var_two = "Products Data Soon....!";
        this.var_three = "Customers Data Soon....!";
    };
};