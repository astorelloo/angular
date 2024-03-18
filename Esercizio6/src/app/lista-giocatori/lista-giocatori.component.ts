import { Component } from '@angular/core';

@Component({
  selector: 'lista-giocatori',
  standalone: true,
  imports: [],
  templateUrl: './lista-giocatori.component.html',
  styleUrl: './lista-giocatori.component.css'
})
export class ListaGiocatoriComponent {
  persone = [
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nickname: "yay (liquid)", eta: "25",nazionalita: "USA", operatore:"Jett"},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nickname: " ", eta: "22",nazionalita: "", operatore:""},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nickname: " ", eta: "22",nazionalita: "", operatore:""},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nickname: " ", eta: "22",nazionalita: "", operatore:""},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nickname: " ", eta: "22",nazionalita: "", operatore:""},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nickname: " ", eta: "22",nazionalita: "", operatore:""},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nickname: " ", eta: "22",nazionalita: "", operatore:""},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nickname: " ", eta: "22",nazionalita: "", operatore:""},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nickname: " ", eta: "22",nazionalita: "", operatore:""},
    {immagine: "https://i.ytimg.com/vi/M2jVRUH2JUA/maxresdefault.jpg", nickname: " ", eta: "22",nazionalita: "", operatore:""},

  ];
  sfondo = ['#FFFFD700', '#c0c0c0', '#cd7f32', '#d2d2d2', '#d2d2d2', '#d2d2d2', '#d2d2d2', '#d2d2d2', '#d2d2d2']; // Array di colore da inserire come sfondo
}