import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastrarComponent,
    SobreComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }