import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcomponent',
  templateUrl: './addcomponent.component.html',
  styleUrls: ['./addcomponent.component.css']
})
export class AddcomponentComponent implements OnInit {

  
  deductionCode ;

  constructor() { }
  ngOnInit() {
    this.deductionCode=' ';
  }


}
