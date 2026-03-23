import { Component, signal } from '@angular/core';
import { Home } from './pages/home/home';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simple-blog-base');
}
