import { Component} from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  carritoArray: any = {}
  menuActive: boolean = false;
 
  constructor(public CarritoService: CarritoService){

  }

  vaciarCarrito(){
    // CarritoService.cantidad = 0;
    // console.log('Vaciando carrito...');
    this.CarritoService.producto = 0;
  }
}
