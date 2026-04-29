import { Component } from '@angular/core';
<<<<<<< HEAD
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
=======
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {}
>>>>>>> 3c94922a0bcf220d1d6604366ce27a4084c3d0b0
