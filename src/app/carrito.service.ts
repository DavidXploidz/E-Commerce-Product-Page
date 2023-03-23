import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  // carrito: number = 0;

  carrito: number = 0;

  productos: any [] = [];
  producto: number = 0;

  constructor() { }

  // Método para agregar un producto al carrito
  agregarProducto(producto: number) {
    // this.productos.push(producto);
    this.producto = producto;
    // console.log(this.productos);
  }

}
