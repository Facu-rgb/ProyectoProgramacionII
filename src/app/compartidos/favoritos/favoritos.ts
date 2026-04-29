import { Component } from '@angular/core';

interface Item {
  nombre: string;
  rareza: string;
}

@Component({
  selector: 'app-favoritos',
  standalone: true,
  templateUrl: './favoritos.html'
})
export class Favoritos {

  favoritos: Item[] = [
    { nombre: 'Espada vieja', rareza: 'comun' },
    { nombre: 'Arco magico', rareza: 'epico' }
  ];

<<<<<<< HEAD
  eliminar(nombre: string) {
    this.favoritos = this.favoritos.filter(
      item => item.nombre !== nombre
    );
  }

}



/*import { Component } from '@angular/core';

interface Item {
  nombre: string;
  rareza: string;
}

@Component({
  selector: 'app-favoritos',
  standalone: true,
  templateUrl: './favoritos.html'
})
export class Favoritos {

  favoritos: Item[] = [
    { nombre: 'Espada vieja', rareza: 'comun' },
    { nombre: 'Arco magico', rareza: 'epico' }
  ];

}*/
=======
}
>>>>>>> 3c94922a0bcf220d1d6604366ce27a4084c3d0b0
