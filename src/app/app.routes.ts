//Este archivo define las rutas de tu aplicación. Aquí configuraremos la ruta para la página de inicio 
import { Routes } from '@angular/router';
import { Home } from './features/home/home'; // Importa el HomeComponent
export const routes: Routes = [{
    path: '',
    component: Home
  }
];