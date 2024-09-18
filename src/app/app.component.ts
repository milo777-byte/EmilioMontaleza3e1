import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from './Components/sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidemenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmilioMontaleza3e1';
}
