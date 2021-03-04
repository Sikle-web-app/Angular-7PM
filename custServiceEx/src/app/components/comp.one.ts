import { Component } from "@angular/core";
import { employeeService } from "../services/employee.service";

@Component({
    selector : "employee",
    templateUrl:"./comp.one.html"
})
export class compOne{
    msg_one:string;
    constructor(private obj:employeeService){}
    ngOnInit(){
        this.msg_one = this.obj.var_one;
    };
};