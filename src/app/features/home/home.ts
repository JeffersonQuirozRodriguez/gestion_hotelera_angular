import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  welcomeMessage: string = 'Bienvenido al Sistema de Gestión de Hoteles';
  description: string = 'Gestiona tus reservas, habitaciones y clientes de forma eficiente.';
}

