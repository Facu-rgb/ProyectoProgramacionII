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
  { nombre: 'Escudo reforzado', poder: 15, precio: 150, rareza: 'raro' },
  { nombre: 'Baston magico', poder: 25, precio: 300, rareza: 'epico' },
  { nombre: 'Armadura de paladin', poder: 50, precio: 1000, rareza: 'legendario' },

  { nombre: 'Daga sombría', poder: 18, precio: 220, rareza: 'raro' },
  { nombre: 'Martillo del herrero', poder: 30, precio: 400, rareza: 'epico' },
  { nombre: 'Arco élfico', poder: 22, precio: 350, rareza: 'raro' },
  { nombre: 'Espada del rey caído', poder: 60, precio: 1200, rareza: 'legendario' }
];

}