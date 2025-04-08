import { Component, OnInit } from '@angular/core';
import { Circulo } from '../models/circulo';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [ IonicModule, FormsModule, CommonModule]
  
})
export class CirculoComponent  {
  radio: number = 0;
  perimetro: number | null = null;
  resultado?: string;

calcularPerimetro() {
  const circulo = new Circulo(this.radio);
  this.perimetro = circulo.calcularPerimetro();

  this.resultado = `El perímetro es: ${this.perimetro.toFixed(2)} cm`;

}
}
