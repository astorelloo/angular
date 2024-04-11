import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroductionComponent, ListComponent, CommonModule, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pagina = "home";
  paginaNavbar(value:any){
    this.pagina = value;
  }
  title = 'Esercizio9';
}