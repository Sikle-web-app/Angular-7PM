import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { User } from '../model/spring.model';
import { JavaService } from '../services/java.service';

@Component({
  selector: 'java',
  templateUrl: './java.component.html',
  styles: [
  ]
})
export class JavaComponent implements OnInit {

  data:User[];

  constructor(private service:JavaService,
              private spinner:SpinnerVisibilityService) { }

  ngOnInit(): void {
      this.spinner.show();
      this.service.getUsers().subscribe((posRes)=>{
        this.data = posRes;
        this.spinner.hide();
      },(errRes:HttpErrorResponse)=>{
        console.log(errRes);
        this.spinner.hide();
      });
  }

}
