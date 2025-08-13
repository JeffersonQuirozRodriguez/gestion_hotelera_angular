import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
pageTitle: string = 'Contáctanos';
  description: string = 'Estamos aquí para ayudarte. Envíanos un mensaje o encuéntranos en nuestras redes.';
  email: string = 'info@hotelmanagement.com';
  phone: string = '+123 456 7890';
}
