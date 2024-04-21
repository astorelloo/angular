import { Routes } from '@angular/router';
import { MostreComponent } from './mostre/mostre.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {path: 'Mostre', component: MostreComponent},
    {path: '', redirectTo:'/Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},  
  ];