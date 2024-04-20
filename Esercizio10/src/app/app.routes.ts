import { Routes } from '@angular/router';
import { MostreComponent } from './mostre/mostre.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {path: 'Mostre', component: MostreComponent},
    {path: 'Home', component: HomeComponent},  
  ];