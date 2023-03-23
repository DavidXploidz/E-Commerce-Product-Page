import { Component } from '@angular/core';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-commerce-product';

  

  constructor(public CarritoService: CarritoService){
    this.cantidad = CarritoService.carrito;
  }

  cantidad: number = 0;

  carrusel = [    
    {
      id:1,
      ruta: "src/../assets/images/image-product-1-thumbnail.jpg",
      rutaBig: "../assets/images/image-product-1.jpg",
      nombre: "Producto1",
      estado: true
    },
    {
      id:2,
      ruta: "src/../assets/images/image-product-2-thumbnail.jpg",
      rutaBig: "src/../assets/images/image-product-2.jpg",
      nombre: "Producto2",
      estado: false
    },
    {
      id:3,
      ruta: "src/../assets/images/image-product-3-thumbnail.jpg",
      rutaBig: "src/../assets/images/image-product-3.jpg",
      nombre: "Producto3",
      estado: false
    },
    {
      id:4,
      ruta: "src/../assets/images/image-product-4-thumbnail.jpg",
      rutaBig: "src/../assets/images/image-product-4.jpg",
      nombre: "Producto4",
      estado: false
    }
  ];

  // Funcion para agregar seleccionar un producto y resaltarlo
  cambiarProducto(id: any){
    // Activalo
    const seleccionado = this.carrusel.filter(item => item.id === id);
    seleccionado.forEach(function(objeto){
      objeto.estado = true;
    });

    // Desactiva los demas
    const deseleccionados = this.carrusel.filter(item => item.id !== id);
    deseleccionados.forEach(function(objeto){
      objeto.estado = false;
    });
  }

  quitar(){
    if(this.cantidad <= 0){
      return
    }
    this.cantidad -= 1;
  }

  agregar(){
    if(this.cantidad >= 10){
      return
    }
    this.cantidad += 1;
  }

 
  agregarProductoAlCarrito(producto: number) {
    this.CarritoService.agregarProducto(producto);
    this.cantidad = 0;
  }

}
