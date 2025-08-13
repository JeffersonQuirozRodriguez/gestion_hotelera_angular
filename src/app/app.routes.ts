//Este archivo define las rutas de tu aplicación. Aquí configuraremos la ruta para la página de inicio 
import { Routes } from '@angular/router';
import { Home } from './features/home/home'; // Importa el HomeComponent
import { Reservations } from './features/reservations/reservations';
import { Rooms } from './features/rooms/rooms';
import { Contact } from './features/contact/contact';
//TODAS LAS RUTAS ESTÁN AQUÍ, SI QUIERES IMPLEMENTAR UNA NUEVA USA IMPORT Y DESPÚES {path:..,component:...}

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'reservations', component: Reservations },
  { path: 'rooms', component: Rooms },
  { path: 'contact', component: Contact },
  { path: '', component: Home }
];