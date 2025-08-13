import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule si vas a usar directivas como *ngIf, *ngFor
import { RouterLink, RouterModule } from '@angular/router'; // Importa RouterLink para la navegación

@Component({
  selector: 'app-header', // Este es el selector que usarás en tu HTML
  imports: [RouterModule], // Indica que es un componente standalone
  templateUrl: './header.html', // Importa las dependencias directamente
  styleUrl: './header.css'
})
export class Header {
  // Puedes añadir propiedades o lógica aquí si es necesario
}
