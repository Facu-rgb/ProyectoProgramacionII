import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.html'
})
export class Nav {

  menuAbierto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrar() {
    this.menuAbierto = false;
  }

}