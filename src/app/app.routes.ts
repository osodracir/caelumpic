import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

/* Mapeamentos entre as URLs e os componentes. */
const ROTAS_APP: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent }
];

export const ROTEAMENTO = RouterModule.forRoot(ROTAS_APP);