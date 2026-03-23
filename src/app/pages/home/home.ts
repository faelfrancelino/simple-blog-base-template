import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, RouterLink, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
