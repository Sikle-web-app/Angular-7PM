import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { UppercaseService } from '../services/uppercase.service';


@Component({
  selector: 'uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent {

  res:any;
  my_msg:any;

  constructor(private service:UppercaseService,
              private spinner:SpinnerVisibilityService){}  

  clickMe(arg1:any):any{
      this.spinner.show();
      this.service.convertToUpperCase({"message":arg1}).subscribe((posRes)=>{
          this.res = posRes;
          this.spinner.hide();
      },(errRes:HttpErrorResponse)=>{
          console.log(errRes);
          this.spinner.hide();
      });
  };

};




