import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
Maquinaria:any;

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.obtenerMaquinaria().subscribe(respuesta=>{
      console.log(respuesta);
      this.Maquinaria=respuesta;
    });
  }

}
