import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { InserirUsuarioComponent } from './inserir-usuario/inserir-usuario.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, // vazio, pois nao vai a lugar algum, apenas carrega a pág principal
  {path:'sobre', component:SobreComponent}, // cria o caminho para a "pág" sobre (nao é bem pagina, é a rota que criamos)
  {path: 'cadastro', component:CadastroComponent},
  {path: 'listar-usuario', component:ListarUsuarioComponent},
  {path: 'inserir-usuario', component:InserirUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
