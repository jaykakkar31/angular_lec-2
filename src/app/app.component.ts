import { Component } from '@angular/core';
import { Router, RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(router:Router){
  }
  title = 'ang_lesson2';
}
