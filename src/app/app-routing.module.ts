import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { EditCategoriaComponent } from './edit/edit-categoria/edit-categoria.component';
import { EditProdutoComponent } from './edit/edit-produto/edit-produto.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';
import { TelaCompraComponent } from './tela-compra/tela-compra.component';
import { TodosProdutosComponent } from './todos-produtos/todos-produtos.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: '' , redirectTo: 'landing-page', pathMatch: 'full'},

  {path: 'cadastrar' , component:CadastrarComponent},
  {path: 'landing-page' , component:LandingPageComponent},
  {path: 'sobre' , component:SobreComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'configuracao' , component:ConfiguracaoComponent},
  {path: 'categoria' , component:CategoriaComponent},
  {path: 'categoria-edit/:id' , component:EditCategoriaComponent},
  {path: 'categoria-delete/:id' , component:CategoriaDeleteComponent},
  {path: 'produto-edit/:id', component:EditProdutoComponent},
  {path: 'produto', component:ProdutoComponent},
  {path: 'produto-delete/:id', component:ProdutoDeleteComponent},
  {path: 'todos-produtos' , component:TodosProdutosComponent},
  {path: 'tela-compra/:id', component:TelaCompraComponent},
  {path: 'info-user', component: UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
