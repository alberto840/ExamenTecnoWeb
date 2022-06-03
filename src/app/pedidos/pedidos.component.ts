import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  formularioDePedidos:FormGroup;
  pedidos:any;

  constructor(private formulario:FormBuilder, private crudService:CrudService) {
    this.formularioDePedidos=this.formulario.group({
      nombre:[''],
      correo:['']
    });
  }

  ngOnInit(): void {
    this.crudService.obtenerEmpleados().subscribe(respuesta=>{
       console.log(respuesta);
       this.pedidos=respuesta;
      });

  }
  enviarDatos():any{
    console.log("Me presionaste xd");
    console.log(this.formularioDePedidos.value);
    this.crudService.AgregarPedido(this.formularioDePedidos.value).subscribe();
  }

}
