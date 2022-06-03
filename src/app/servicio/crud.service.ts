import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/index.php/'
API2: string='http://localhost/index3.php/'

  constructor(private clienteHttp:HttpClient){}
    AgregarPedido(datosPedido:Empleado):Observable<any>{
      return this.clienteHttp.post(this.API+"?insertar=1",datosPedido);
    }
    obtenerEmpleados(){
      return this.clienteHttp.get(this.API);
    }
    obtenerMaquinaria(){
      return this.clienteHttp.get(this.API2);
    }
}
