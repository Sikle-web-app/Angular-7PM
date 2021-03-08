import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JavaService } from '../services/java.service';

@Component({
  selector: 'uppercase',
  templateUrl: './uppercase.component.html',
  styles: [
  ]
})
export class UppercaseComponent implements OnInit {

  res:any;
  msg:any;

  constructor(private service:JavaService) { }

  ngOnInit(): void {
     
  }

  clickMe(arg1:any){
     this.service.convertToUppercase({"message":arg1}).subscribe((posRes)=>{
        this.res = posRes;
     },(errRes:HttpErrorResponse)=>{
        console.log(errRes);
     });
  }

}
