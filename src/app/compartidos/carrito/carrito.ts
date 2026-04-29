import { Component } from '@angular/core';

<<<<<<< HEAD
interface Item {
  id: number;
  nombre: string;
  tipo: 'arma' | 'secundaria' | 'armadura' | 'talisman';
  poder: number;
  rareza: string;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  templateUrl: './carrito.html'
})
export class Carrito {

  // Inventario inicial (hardcodeado)
  inventario: Item[] = [
    { id: 1, nombre: 'Espada vieja', tipo: 'arma', poder: 10, rareza: 'comun' },
    { id: 2, nombre: 'Arco simple', tipo: 'secundaria', poder: 8, rareza: 'comun' },
    { id: 3, nombre: 'Armadura rota', tipo: 'armadura', poder: 12, rareza: 'raro' },
    { id: 4, nombre: 'Amuleto extraño', tipo: 'talisman', poder: 5, rareza: 'epico' }
  ];

  // Slots de equipo
  equipo = {
    arma: null as Item | null,
    secundaria: null as Item | null,
    armadura: null as Item | null,
    talisman: null as Item | null
  };

  // Equipar item en su slot
  equipar(item: Item) {
    this.equipo[item.tipo] = item;
  }

  // Calcular poder total
  get poderTotal(): number {
    return Object.values(this.equipo)
      .filter(item => item !== null)
      .reduce((acc, item) => acc + (item?.poder || 0), 0);
=======
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
>>>>>>> 3c94922a0bcf220d1d6604366ce27a4084c3d0b0
  }

}