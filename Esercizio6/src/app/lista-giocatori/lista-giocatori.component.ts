import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lista-giocatori',
  standalone: true,
  imports: [  CommonModule],
  templateUrl: './lista-giocatori.component.html',
  styleUrl: './lista-giocatori.component.css'
})
export class ListaGiocatoriComponent {
  persone = [
    {immagine: "https://old.runitback.gg/wp-content/uploads/2022/10/yay_front.webp", nickname: "yay", eta: "25",nazionalita: "USA", operatore:"Jett"},
    {immagine: "https://cdn.oneesports.gg/cdn-data/2022/09/Valorant_Ardiis_Champions2022_Day4-1024x576.webp", nickname: "ardiis", eta: "25",nazionalita: "Latvia", operatore:"yoru"},
    {immagine: "https://editors.dexerto.com/wp-content/uploads/2023/08/25/53139100442_991aef2016_k_1600x900.jpg", nickname: "Chronicle", eta: "22",nazionalita: "Russia", operatore:"viper"},
    {immagine: "https://media.assettype.com/afkgaming/2023-06/111d6b21-3632-47b8-9ece-e00d3833db49/Untitled_design___2023_06_26T152729_630.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max", nickname: "Derke", eta: "21",nazionalita: "Russia", operatore:"raze"},
    {immagine: "https://cdn.oneesports.gg/cdn-data/2022/02/Valorant_Fnatic_Boaster.webp", nickname: "Boaster", eta: "28",nazionalita: "UK", operatore:"omen"},
    {immagine: "https://cdn.oneesports.gg/cdn-data/2021/06/Valorant_TenZSentinelsVCTStage2MastersPost_2-1024x726.jpg", nickname: "TenZ", eta: "22",nazionalita: "Canada", operatore:"omen"},
    {immagine: "https://cdn.oneesports.gg/cdn-data/2022/09/Valorant_BcJ_Champions2022_Day6.jpg", nickname: "BcJ", eta: "23",nazionalita: "UK", operatore:"jett"},
    {immagine: "data:image/jpeg;base64,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", nickname: "Jinggg", eta: "20",nazionalita: "Singapore", operatore:"chamber"},
    {immagine: "data:image/jpeg;base64,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", nickname: "saky", eta: "26",nazionalita: "Brasile", operatore:"gekko"},
    {immagine: "https://cdn.oneesports.gg/cdn-data/2022/10/Valorant_Marved_Masters.webp", nickname: " Marved", eta: "22",nazionalita: "canada", operatore:"24"},

  ];
  sfondo = ['#FFFFD700', '#c0c0c0', '#cd7f32', '#d2d2d2', '#d2d2d2', '#d2d2d2', '#d2d2d2', '#d2d2d2', '#d2d2d2']; // Array di colore da inserire come sfondo
}