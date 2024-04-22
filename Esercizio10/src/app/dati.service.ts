import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  constructor() { }
  mostre=[
    {nome:"MOSTRA DI DE NITTIS A MILANO",artisti:"Giuseppe De Nittis",immagine:"https://www.artribune.com/wp-content/uploads/2024/02/Giuseppe-De-Nittis-Lamazzone-al-Bois-de-Boulogne-1875-ca-Museo-delle-Raccolte-Frugone-Genova.jpg", descrizione:"La mostra di Giuseppe De Nittis a Palazzo Reale di Milano sarà un viaggio nella pittura di uno dei più grandi artisti italiani dell’Ottocento, particolarmente sensibile alle correnti del Verismo e dell’Impressionismo che seppe interpretare in chiave originale e personale.", dataInizio:"2024/02/24", dataFine:"2024/06/30"},
    {nome:"MOSTRA DI MARTIN PARR A MILANO",artisti:"Martin Parr",immagine:"https://fotocult.it/wp-content/uploads/2024/03/Martin-Parr-2.jpg", descrizione:"La mostra Martin Parr, Short & Sweet a Milano, frutto della rinnovata collaborazione con Magnum Photos, celebra il lavoro del fotoreporter britannico che ha saputo indagare la società nei suoi aspetti più controversi con un tocco di ironia e vivacità.", dataInzio:"2024/02/10", dataFine:"2024/06/30"},
    {nome:"TATUAGGIO. STORIE DAL MEDITERRANEO",artisti:"diversi tatuatori di piu' epoche",immagine:"https://d2j6dbq0eux0bg.cloudfront.net/images/4871051/4225084249.jpg", descrizione:"La mostra 'Tatuaggio. Storie dal Mediterraneo' al Mudec di Milano, è un percorso curioso alla scoperta di una pratica dalla storia millenaria, che ha attraversato i secoli e i continenti, arricchendosi di nuovi significati e di diverse modalità di realizzazione.", dataInzio:"2024/03/28", dataFine:"2024/07/28"},
    {nome:"MOSTRA JOAN MIRÒ. LA POESIA DELLE FORME A MONZA",artisti:"Joan Miro",immagine:"https://www.amartemoderna.com/wp-content/uploads/2017/05/mir.jpg.webp", descrizione:"La visita guidata alla mostra di Mirò a Monza sarà un'occasione per ripercorrere l'arte colorata, originale e sognante di uno dei maggiori artisti del XX secolo. Organizzata in occasione del 130° anniversario della nascita dell'artista catalano Joan Mirò, la Villa Reale di Monza ospita al suggestivo terzo piano del Belvedere, la mostra 'La poesia delle forme', dedicata al raffinato e complesso rapporto tra arte e parola che caratterizzò l'opera di Mirò.", dataInzio:"2023/12/26", dataFine:"2024/05/05"},
    {nome:"MOSTRA DI PICASSO AL MUDEC DI MILANO",artisti:"Pablo Picasso",immagine:"https://svetslik.si/wp-content/uploads/2021/09/Pablo-Picasso.jpg.webp", descrizione:"La mostra di Picasso al Mudec di Milano è dedicata al tema “La metamorfosi della figura”, con lo scopo di approfondire aspetti poco conosciuti della poetica del grande artista del Novecento, al fine di comprendere a fondo il valore del contributo artistico che il pittore spagnolo ancora esercita sull'arte contemporanea.", dataInzio:"2024/02/22", dataFine:"2024/07/30"},
    {nome:"MOSTRA 'CÉZANNE E RENOIR' A MILANO",artisti:"Paul Cézann e Pierre-Auguste Renoir",immagine:"https://www.gedistatic.it/content/gnn/img/lastampa/2024/03/18/180119354-34dbd6c3-f19f-4ec0-9873-9b62f28c3896.jpg", descrizione:"La mostra 'Cézanne e Renoir' in programma a Palazzo Reale dal 19 marzo 2024 porta a Milano una ricca selezione di opere provenienti da due prestigiosi musei parigini, il Museo d'Orsay e l'Orangerie, grazie alle quali sarà possibile ripercorrere la rivoluzionaria stagione artistica dell'Impressionismo e illustrare l'eredità pittorica lasciata dai due grandi maestri francesi alle avanguardie del Novecento.", dataInzio:"2024/03/19", dataFine:"2024/06/30"},
    {nome:"MOSTRA DI MUNCH A MILANO",artisti:"Edvard Munch",immagine:"https://cdn.mediatheque.epmoo.fr/link/pcp19ipc0ez0bz4.jpg", descrizione:"La mostra di Edvard Munch a Palazzo Reale di Milano offre l'imperdibile occasione di approfondire la conoscenza di uno dei più importanti interpreti della pittura europea a cavallo tra XIX e XX secolo, che ha saputo rielaborare gli stimoli della pittura del proprio tempo dando vita a un'arte personalissima ma al contempo in grado di rappresentare le angosce e le paure del genere umano.", dataInzio:"2024/10/01", dataFine:"2025/01/10"},
  ]
  dati=[
    {nome:'gino',descrizione:"è un coglione"},
    {nome:'pino',descrizione:""},
    {nome:'mario',descrizione:""},
  ]
  
}
