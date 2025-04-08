import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ CommonModule, FormsModule, CirculoComponent, TrianguloComponent, IonicModule ],
})
export class HomePage {
  figuraSeleccionada: string = '';
}


