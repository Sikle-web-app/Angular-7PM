import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { SpinnerVisibilityService } from "ng-http-loader";
import { Customers } from "../model/customers.model";
import { customersService } from "../services/customers.service";

@Component({
    selector : "customers",
    templateUrl : "./customers.component.html"
})

export class customersComponent{
    //model
    data:Customers;
    
    constructor(private service:customersService,
                private spinner:SpinnerVisibilityService){}

    ngOnInit(){
        //show the spinner here
        this.spinner.show();
        this.service.getCustomers().subscribe((posRes)=>{
            this.data = posRes;  
            //hide the spinner here
            this.spinner.hide();
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
            //hide the spinner here
            this.spinner.hide();
        });
    };

};