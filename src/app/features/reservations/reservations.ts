import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-reservations',
  imports: [CommonModule],
  templateUrl: './reservations.html',
  styleUrl: './reservations.css'
})


export class Reservations {
  pageTitle: string = 'Gestión de Reservas';
  description: string = 'Aquí podrás ver, añadir, editar y eliminar reservas de hotel.';
  reservasPendientes: number = 5; // Dato de ejemplo
}
