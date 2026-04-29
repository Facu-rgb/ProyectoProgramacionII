import { Component } from '@angular/core';

interface Mision {
  nombre: string;
  dificultad: string;
  recompensa: number;
}

@Component({
  selector: 'app-ofertas',
  standalone: true,
  templateUrl: './ofertas.html'
})
export class Ofertas {

  ofertas: Mision[] = [
    { nombre: 'Cazar goblins', dificultad: 'facil', recompensa: 100 },
    { nombre: 'Explorar cueva', dificultad: 'media', recompensa: 300 },
    { nombre: 'Derrotar dragon', dificultad: 'dificil', recompensa: 1000 }
  ];
  misionesAvanzadas = [
  {
    nombre: 'Derrotar al lich',
    dificultad: 'Alta',
    recompensa: '600 oro'
  },
  {
    nombre: 'Explorar la cueva oscura',
    dificultad: 'Media',
    recompensa: 'Ítem raro'
  },
  {
    nombre: 'Escoltar al mercader',
    dificultad: 'Media',
    recompensa: '350 oro'
  }
];
}