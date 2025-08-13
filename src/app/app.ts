import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hoteles');
}
