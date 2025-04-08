import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput } from '@ionic/angular/standalone'
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { trianguloEscaleno } from '../models/triangulo-escaleno';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [ IonicModule, FormsModule, CommonModule ],
  
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro?: number;

  calcular() {
    const triangulo = new trianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.perimetro = triangulo.calcularPerimetro();
  }

}
