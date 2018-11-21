import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  producto: ProductoDescripcion;
  idproducto: string;

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) { }

  ngOnInit() {

    this.route.params
      .subscribe( parametros => {
        console.log(parametros['idproducto']);

        this.productoService.getProducto(parametros['idproducto'])
          .subscribe ( (producto: ProductoDescripcion) => {
            this.idproducto = parametros['idproducto'];
            this.producto = producto;
          });
        


      });

  }

}
