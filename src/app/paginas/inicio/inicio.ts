import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  eventos = [
    {
      titulo: 'Doble XP',
      descripcion: 'Gana el doble de experiencia',
      imagen: 'https://i.redd.it/8hr60jort3w91.gif'
    },
    {
      titulo: 'Bonificacion de Monedas',
      descripcion: 'Gana mas monedas en misiones del bosque',
      imagen: 'https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyaDFjdmo0c3k0d3dxZWRwc2l6Nmxmb3oxNDZ1YnlqZWlrdzZ0ejN4NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3diu2dFNpV8AnozJ3V/giphy.gif'
    },
    {
      titulo: 'Evento especial viaje estelar',
      descripcion: 'Recompensas únicas en la nueva mazmorra',
      imagen: 'https://cdn.lospec.com/gallery/the-galaxy-420512.gif'
    }
  ];

}