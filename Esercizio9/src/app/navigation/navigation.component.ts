
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Output() paginaEvento = new EventEmitter<string>();
  pagina = "home";

  setHome(){
    this.pagina = "home";
    this.paginaEvento.emit(this.pagina);
  }
  setProdotti(){
    this.pagina = "biglietto";
    this.paginaEvento.emit(this.pagina);
  }
}
