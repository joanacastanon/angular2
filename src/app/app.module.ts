import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { InserirUsuarioComponent } from './inserir-usuario/inserir-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    CadastroComponent,
    ListarUsuarioComponent,
    InserirUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
