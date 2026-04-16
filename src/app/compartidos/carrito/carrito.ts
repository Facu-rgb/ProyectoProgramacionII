import { Component } from '@angular/core';

Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})

interface Item {
  nombre: string;
  poder: number;
  precio: number;
  rareza: string;
}

export class Carrito {

  carrito: Item[] = [
    { nombre: 'Espada', poder: 10, precio: 100, rareza: 'comun' },
    { nombre: 'Armadura', poder: 20, precio: 200, rareza: 'raro' }
  ];

  get total(): number {
    return this.carrito.reduce((acc, item) => acc + item.precio, 0);
  }

}