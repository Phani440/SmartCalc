import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  deductionsCode : string;
  deductionsAmount : number;
  userMessage : string;

  ngOnInit() {

    let code = this.route.snapshot.params['deductionCode'];

    console.log(code);

    if(code == '401k'){
      this.deductionsCode='10';
    }
    else if(code == 'HSA'){
      this.deductionsCode='20';
    }
    else if(code == 'DentalCare'){
      this.deductionsCode='30';
    }
  }

  onAddDeductions(){
    console.log("Inside code component "+this.deductionsAmount);

    if( this.deductionsAmount> 0 ){
      this.userMessage = "Your additional tax savings will be $ " +Math.round(((this.deductionsAmount) *0.33*12)) +".";
  }
  }

}
