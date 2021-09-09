import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { EditCategoriaComponent } from './edit/edit-categoria/edit-categoria.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '' , redirectTo: 'landing-page', pathMatch: 'full'},

  {path: 'cadastrar' , component:CadastrarComponent},
  {path: 'landing-page' , component:LandingPageComponent},
  {path: 'sobre' , component:SobreComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'configuracao' , component:ConfiguracaoComponent},
  {path: 'categoria' , component:CategoriaComponent},
  {path: 'categoria-edit/:id' , component:EditCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
