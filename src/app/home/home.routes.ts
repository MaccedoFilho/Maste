import { Routes } from '@angular/router';
import { ProjetoDetalhesComponent } from '../projeto-detalhes/projeto-detalhes.component';
import { AppComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'projeto/:id', component: ProjetoDetalhesComponent },
  { path: '**', redirectTo: '/' }
];
