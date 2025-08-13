import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})

export class Rooms {

  pageTitle: string = 'Inventario de Habitaciones';
  description: string = 'Explora y gestiona las habitaciones disponibles en tu hotel.';
  habitacionesDisponibles: number = 12; // Dato de ejemplo
}
