import { Component } from '@angular/core';
import { ThirdComponentComponent } from '../third-component/third-component.component';
import { FourthComponentComponent } from '../fourth-component/fourth-component.component';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [ ThirdComponentComponent, FourthComponentComponent],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
 nome1="I Due Spiderman"
 nome2="Sad Cat"
 descrizione1="In questo meme vi sono due Spiderman che si puntano a vicenda e viene usata per scherzare su cose diverse che sembrano uguali"
 descrizione2="E' un tenero gattino triste"
}
