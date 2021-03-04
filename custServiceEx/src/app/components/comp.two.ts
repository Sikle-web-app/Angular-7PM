import { Component } from "@angular/core";
import { employeeService } from "../services/employee.service";

@Component({
    selector : "products",
    templateUrl:"./comp.two.html"
})
export class compTwo{
    msg_two:string;
    constructor(private obj:employeeService){}
    ngOnInit(){
        this.msg_two = this.obj.var_two;
    }
};