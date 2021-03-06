import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EditCategoriaComponent } from './edit/edit-categoria/edit-categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { EditProdutoComponent } from './edit/edit-produto/edit-produto.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { TodosProdutosComponent } from './todos-produtos/todos-produtos.component';
import { TelaCompraComponent } from './tela-compra/tela-compra.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AlertasComponent } from './alertas/alertas.component';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastrarComponent,
    SobreComponent,
    FooterComponent,
    LandingPageComponent,
    LoginComponent,
    ConfiguracaoComponent,
    CategoriaComponent,
    EditCategoriaComponent,
    CategoriaDeleteComponent,
    EditProdutoComponent,
    ProdutoComponent,
    ProdutoDeleteComponent,
    TodosProdutosComponent,
    TelaCompraComponent,
    AlertasComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
   { provide: LocationStrategy,
    useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }