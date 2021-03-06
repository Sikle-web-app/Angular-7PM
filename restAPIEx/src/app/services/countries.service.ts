//service
//import Injectable
//Injectable, used to create the service
import { Injectable } from "@angular/core";
//import HttpClient
//HttpClient used to make http calls
import { HttpClient } from "@angular/common/http";
//import Observable
//Observable, used to make the asynchronous call
import { Observable } from "rxjs";
import { Country } from "../modal/countries.modal";
@Injectable({
    providedIn : "root"
})
export class countriesService{
    constructor(private http:HttpClient){}

    public getCountries():Observable<Country[]>{
        return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/all`);
    };

};
