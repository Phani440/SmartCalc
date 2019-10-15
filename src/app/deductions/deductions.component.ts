import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.css']
})
export class DeductionsComponent implements OnInit {

  constructor( private router: Router, private  route: ActivatedRoute) { }

  
  userMessage : string;
  deductionsAmount : number;
  edited =false;

  
  ngOnInit() {
   this.edited=false;
   this.deductionsAmount=30;
  }

  onEditDeductions(){
    console.log("inside edit deductions");
    this.edited = true;
    if( this.deductionsAmount> 30 ){
       // this.userMessage = "Your additional tax savings will be $ " +Math.round(((this.deductionsAmount-30) *0.33*12)) +".";
        this.userMessage = "Projected increase in Retirement savings is  $" +Math.round(((this.deductionsAmount-30) *0.33*12)) +"K.";

    }
    else  if( this.deductionsAmount< 30 && this.deductionsAmount> 0 ){
       this.userMessage = "Projected decrease in Retirement savings is  $"+Math.round(((30-this.deductionsAmount) *0.33*12))+"K.";   
       // this.userMessage = "You will be paying $ "+(30-this.deductionsAmount) *0.33*12 +" in taxes this year";   
      }

  }


}
