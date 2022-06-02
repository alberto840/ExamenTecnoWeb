import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public enviar(){
    alert("Se envio el formulario, pronto nos pondremos en contacto contigo");
  }
}
