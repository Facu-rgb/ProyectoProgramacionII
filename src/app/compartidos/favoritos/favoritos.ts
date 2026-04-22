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