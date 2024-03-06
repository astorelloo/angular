import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'lista-contatti', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {
  persone = [
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Luca ", cognome: "Azzo", eta: "22", nTelefono: "+39 347 810 4148", stato:true, colore: "Rosa"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Eddy", cognome: "Okane", eta: "25", nTelefono: "111111111", stato:false, colore: "Verde"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Three ", cognome: "Mone", eta: "69", nTelefono: "22222222", stato: true, colore: "Blu"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Mike ", cognome: "Coxlong", eta: "34", nTelefono: "02 550271", stato:false, colore: "Verde pitonato"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Gabe ", cognome: "Itch", eta: "17", nTelefono: "118", stato: true, colore: "Grigio squalo"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Dixie " , cognome: "Normus", eta: "18", nTelefono: "1522", stato:false, colore: "Verde foresta"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Antonio", cognome: "Soliman", eta: "15", nTelefono: "+39 348 968 1247", stato:false, colore: "marrone"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Lorenzo " , cognome: "Hu", eta: "18", nTelefono: "+39 347 810 4148", stato:true, colore: "nero opaco"},
    {immagine: "https://www.fotorapida.com/wp-content/uploads/2018/02/giusta-e1582735572290.jpg", nome: "Thomas ", cognome: "Turbato", eta: "20", nTelefono: "420", stato:false, colore: "f0cd23a"}
  ];
  sfondo = ['#ffe4e1', '#db7093', '#9999ff', '#87ceeb', '#98fb98', '#f0e68c', '#ffa07a', '#f08080', '#cd853f']; // Array di colore da inserire come sfondo
}
