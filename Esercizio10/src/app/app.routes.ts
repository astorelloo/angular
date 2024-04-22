import { Routes } from '@angular/router';
import { MostreComponent } from './mostre/mostre.component';
import { HomeComponent } from './home/home.component';
import {DettagliComponent} from './dettagli/dettagli.component';

export const routes: Routes = [
    {path: 'Mostre', component: MostreComponent},
    {path: '', redirectTo:'/Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},  
    {path: 'Dettagli/:id', component: DettagliComponent},
  ];