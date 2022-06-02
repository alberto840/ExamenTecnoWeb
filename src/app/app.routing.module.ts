import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactosComponent } from "./contactos/contactos.component"
import { PedidosComponent } from "./pedidos/pedidos.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'contactos', component: ContactosComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
