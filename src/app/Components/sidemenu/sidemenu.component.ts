import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})

export class SidemenuComponent {
  profileImageUrl: string = 'https://i.pinimg.com/originals/d2/d9/d6/d2d9d68e25e663b3c8161ed5ef8aa3ca.jpg';
  username: string = "Emilio Montaleza";
  theme: string = "";  // Color inicial
  widthMenu: number = 50;
  visibleMenu: boolean = true;

  // Lista de colores para alternar
  colors: string[] = ['#1E90FF', '#FF4500', '#32CD32', '#9400D3', '#FFD700', '#FF69B4', '#00CED1', '#FF1493'];
  currentColorIndex: number = 0;

  // Cambia entre los colores disponibles
  cycleThemeColor(): void {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    this.theme = this.colors[this.currentColorIndex];
  }

  // Alterna la visibilidad del menú
  setVisibilityMenu(): void {
    this.visibleMenu = !this.visibleMenu;
  }

  // Ajusta el tamaño del menú
  setSizeMenu(): void {
    if (this.widthMenu >= 100) {
      this.widthMenu = 35; // Resetea a tamaño original
    } else {
      this.widthMenu += 25; // Incrementa en 25%
    }
  }
}
