import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';
@Component({
  selector: 'lista-giocatori',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-giocatori.component.html',
  styleUrl: './lista-giocatori.component.css'
})
export class ListaGiocatoriComponent {
  persone = [
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nome: "Luca ", cognome: "Azzo", eta: "22", nTelefono: "+39 347 810 4148", stato:true, colore: "Rosso"},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nome: "Eddy", cognome: "Okane", eta: "25", nTelefono: "111111111", stato:false, colore: "Verde"},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nome: "Three ", cognome: "Mone", eta: "69", nTelefono: "22222222", stato: true, colore: "Blu"},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nome: "Mike ", cognome: "Coxlong", eta: "34", nTelefono: "02 550271", stato:false, colore: "Giallo"},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nome: "Gabe ", cognome: "Itch", eta: "17", nTelefono: "118", stato: true, colore: "Viola"},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nome: "Dixie " , cognome: "Normus", eta: "18", nTelefono: "1522", stato:false, colore: "Ciano"},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nome: "Antonio", cognome: "Soliman", eta: "15", nTelefono: "+39 348 968 1247", stato:false, colore: "Marrone"},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nome: "Lorenzo " , cognome: "Hu", eta: "18", nTelefono: "+39 347 810 4148", stato:true, colore: "Verde scuro"},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nome: "Thomas ", cognome: "Turbato", eta: "20", nTelefono: "420", stato:false, colore: "f0cd23a"}
  ];
  sfondo = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#800000', '#008000', '#000080']; // Array di colore da inserire come sfondo
}
