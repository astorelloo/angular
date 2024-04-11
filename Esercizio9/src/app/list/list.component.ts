import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  biglietti=[
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},

  ]
}