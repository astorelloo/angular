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
    {immagine:"https://wips.plug.it/cips/tecnologia/cms/2023/12/marte-2.jpg", destinazione:"Marte", sistemaSolare:"Sistema Solare", durata:"0.0000158 anni luce", spazioPorto:"Terra, Spazioporto Internazionale", partenzaArrivo:"Partenza il 12 aprile 2030, Arrivo stimato nell'ottobre 2030", costo:"$200 milioni"},
    {immagine:"https://upload.wikimedia.org/wikipedia/commons/8/80/Artist%E2%80%99s_impression_of_a_planet_around_Alpha_Centauri_B_%28symbolic%2C_annotated%29.jpg", destinazione:"Alpha Centauri Bb (esopianeta)", sistemaSolare:"Sistema Alpha Centauri", durata:"4.37 anni luce", spazioPorto:"Terra, Spazioporto Internazionale", partenzaArrivo:"Partenza il 1 luglio 2045, Arrivo stimato nel 2050", costo:"$10-12 miliardi"},
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},
    {immagine:"", destinazione:" ", sistemaSolare:"", durata:"", spazioPorto:"", partenzaArrivo:"", costo:""},
  ]
}