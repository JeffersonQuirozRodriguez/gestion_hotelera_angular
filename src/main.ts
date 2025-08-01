import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { App } from './app/app';
import { routes } from './app/app.routes'; // Importa tus rutas
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
