//import Injectable
//Injectable used to create the "service"
import { Injectable } from "@angular/core";

//import HttpClient
//HttpClient, used to make the rest api calls
import { HttpClient } from "@angular/common/http";


//import Observable
//Observable, used to make the asynchronous call
import { Observable } from "rxjs";


//import Model
import { Customers } from "../model/customers.model";

//use the Injectable
@Injectable({
    providedIn : "root"
})
export class customersService{
    //dependency injection
    constructor(private http:HttpClient){}

    
    //create the function
    public getCustomers():Observable<Customers>{
        return this.http.get<Customers>(`https://www.w3schools.com/angular/customers.php`);
    };

};