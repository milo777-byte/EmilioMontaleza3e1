import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})

export class SidemenuComponent {
  profileImageUrl: string = 'https://i.pinimg.com/originals/d2/d9/d6/d2d9d68e25e663b3c8161ed5ef8aa3ca.jpg';
  username:string="Emilio Montaleza";
  theme:string="";
  widthMenu:number=50;
  visibleMenu:boolean = true;

  setVisibilityMenu():void{
    this.visibleMenu = !this.visibleMenu;
  }

  setThemeColor(color:string):void{
    this.theme = color;
  }

  setSizeMenu(): void {
    if (this.widthMenu >= 100) {
      this.widthMenu = 35; // Resetea a tamaño original
    } else {
      this.widthMenu += 25; // Incrementa en 25%
    }
  }
}
