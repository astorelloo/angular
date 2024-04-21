import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatiService } from '../dati.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {
  constructor(public Dati: DatiService){

  }
}
