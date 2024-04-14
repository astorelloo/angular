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
    {immagine:"https://wips.plug.it/cips/tecnologia/cms/2023/12/marte-2.jpg", destinazione:"Marte", sistemaSolare:"Sistema Solare", durata:"0.0000158 1,58x10^(-6)", spazioPorto:"Terra, Spazioporto Internazionale", partenza:"12/04/2030",arrivo:"12/10/2030", costo:"200000000"},
    {immagine:"https://upload.wikimedia.org/wikipedia/commons/8/80/Artist%E2%80%99s_impression_of_a_planet_around_Alpha_Centauri_B_%28symbolic%2C_annotated%29.jpg", destinazione:"Alpha Centauri Bb (esopianeta)", sistemaSolare:"Sistema Alpha Centauri", durata:"4.37x10^(1)", spazioPorto:"Terra, Spazioporto Internazionale", partenzaArrivo:"1/06/2045" , arrivo:"2/03/2050",costo:"10000000000"},
    {immagine:"https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2007/05/titan_s_full_disk/10040330-2-eng-GB/Titan_s_full_disk_pillars.jpg", destinazione:"Titano (luna di Saturno)", sistemaSolare:"Sistema Solare", durata:"3,26x10(-13)", spazioPorto:"Terra, Spazioporto Internazionale", partenza:"15/03/2035" , arrivo:"17/03/2035", costo:"500000000"},
    {immagine:"https://www.media.inaf.it/wp-content/uploads/2018/06/174414_web2.jpg", destinazione:"Kepler-186f (esopianeta)", sistemaSolare:"Sistema Kepler-186", durata:"5x10^(2)", spazioPorto:"Terra, Spazioporto Internazionale", partenza:"1/9/2200" ,arrivo:"1/01/2700", costo:"100000000"},
    {immagine:"https://media-assets.wired.it/photos/615dae2eba86803b5de3e163/master/pass/wired_placeholder_dummy.png", destinazione:" Encelado (luna di Saturno)", sistemaSolare:"Sistema Solare", durata:"3,26x10^(-13)", spazioPorto:"Terra, Spazioporto Internazionale", partenza:"10/05/2040", arrivo:" 30/05/2040", costo:"600000000"},
  ]
}