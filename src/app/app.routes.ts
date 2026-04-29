import { Routes } from '@angular/router';
import { Inicio,  }from'./paginas/inicio/inicio';
import { Productos, }from'./paginas/productos/productos';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Contacto } from './paginas/contacto/contacto';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Registro } from './auth/registro/registro';

export const routes: Routes = [

{ path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },

{ path: 'inicio',       component: Inicio },
{ path: 'productos',  component: Productos },
{ path: 'ofertas',  component: Ofertas },
{ path: 'contacto',  component: Contacto},


{ path: 'carrito',  component: Carrito },
{ path: 'favoritos',  component: Favoritos },


{ path: 'inicioSesion',  component: InicioSesion },
{ path: 'registro',  component: Registro},
{ path: '**', redirectTo: 'inicio-sesion' },
];
