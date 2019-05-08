import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { PayComponent } from './pay/pay.component';
import { MainComponent } from './main/main.component';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';
import { CodeComponent } from './code/code.component';


const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'home', component:MainComponent},
  { path:'pay', component:HomeComponent},
  { path:'deductions', component:PayComponent},
  { path:'deductions/add', component:AddcomponentComponent},
  { path:'deductions/edit', component:DeductionsComponent},
  { path:'deductions/code/:deductionCode', component:CodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
