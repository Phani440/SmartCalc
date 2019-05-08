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
    
    this.edited = true;
  }


}
