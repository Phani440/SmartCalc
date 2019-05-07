import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { PayComponent } from './pay/pay.component';


const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'home', component:HomeComponent},
  { path:'pay', component:PayComponent},
  { path:'deductions', component:DeductionsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
