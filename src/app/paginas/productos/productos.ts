import { Component } from '@angular/core';

interface Item {
  nombre: string;
  poder: number;
  precio: number;
  rareza: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.html'
})
export class Productos {

  productos: Item[] = [
    { nombre: 'Espada', poder: 10, precio: 100, rareza: 'comun' },
    { nombre: 'Escudo', poder: 15, precio: 150, rareza: 'raro' },
    { nombre: 'Baston magico', poder: 25, precio: 300, rareza: 'epico' },
    { nombre: 'Armadura legendaria', poder: 50, precio: 1000, rareza: 'legendario' }
  ];

}