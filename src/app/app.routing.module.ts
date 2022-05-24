import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactosComponent } from "./contactos/contactos.component"
import { FormularioComponent } from "./formulario/formulario.component";
import { ProductoComponent } from "./producto/producto.component";

const routes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: 'productos', component: ProductoComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'contactos', component: ContactosComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
