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
    {immagine:"https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2007/05/titan_s_full_disk/10040330-2-eng-GB/Titan_s_full_disk_pillars.jpg", destinazione:"Titano (luna di Saturno)", sistemaSolare:"Sistema Solare", durata:"0.00000000000326 anni luce", spazioPorto:"Terra, Spazioporto Internazionale", partenzaArrivo:"Partenza il 15 marzo 2035, Arrivo stimato nel marzo 2035", costo:"$500 milioni"},
    {immagine:"https://www.media.inaf.it/wp-content/uploads/2018/06/174414_web2.jpg", destinazione:"Kepler-186f (esopianeta)", sistemaSolare:"Sistema Kepler-186", durata:"500 anni luce", spazioPorto:"Terra, Spazioporto Internazionale", partenzaArrivo:"Partenza il 1 settembre 2200, Arrivo stimato nel 2700", costo:"$100 miliardi"},
    {immagine:"https://media-assets.wired.it/photos/615dae2eba86803b5de3e163/master/pass/wired_placeholder_dummy.png", destinazione:" Encelado (luna di Saturno)", sistemaSolare:"Sistema Solare", durata:"0.00000000000326 anni luce ", spazioPorto:"Terra, Spazioporto Internazionale", partenzaArrivo:"Partenza il 10 maggio 2040, Arrivo stimato nel maggio 2040", costo:"$600 milioni"},
  ]
}