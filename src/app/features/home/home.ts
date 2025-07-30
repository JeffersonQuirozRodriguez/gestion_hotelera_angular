import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [ CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  welcomeMessage: string = 'Bienvenido al Sistema de Gestión de Hoteles';
  description: string = 'Gestiona tus reservas, habitaciones y clientes de forma eficiente.';
}

