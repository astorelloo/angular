import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lista-contatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {
  persone = [
    {immagine: "", nome: "Gianluca ", cognome: "Vacchi", eta: "55", nTelefono: "02-5511153", stato:true, colore: "rosso"},
    {immagine: "", nome: "Ms.Kappa ", cognome: "L'urina", eta: "25", nTelefono: "392-84738834", stato:true, colore: "arancione"},
    {immagine: "", nome: "Uge ", cognome: "Jass", eta: "69", nTelefono: "328-3048279", stato:true, colore: "grigio"},
    {immagine: "", nome: "Francesco ", cognome: "Iodice", eta: "34", nTelefono: "", stato:true, colore: "nero"},
    {immagine: "", nome: "Cristiano ", cognome: "Verderio", eta: "17", nTelefono: "118", stato:true, colore: "viola"},
    {immagine: "", nome: "Giulia" , cognome: "De Angeli", eta: "18", nTelefono: "1522", stato:true, colore: "rosa"},
    {immagine: "", nome: "Samuele ", cognome: "Lo Fidanzato", eta: "15", nTelefono: "114", stato:true, colore: "blu"},
    {immagine: "", nome: "Lorenzo" , cognome: "L'amante", eta: "18", nTelefono: "112", stato:true, colore: "verde"},
    {immagine: "", nome: "Thomas ", cognome: "Turbato", eta: "20", nTelefono: "420", stato:true, colore: "giallo"}
  ]
}
