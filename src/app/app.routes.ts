import { Routes } from '@angular/router';
import { ProjetoDetalhesComponent } from './projeto-detalhes/projeto-detalhes.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projeto/:id', component: ProjetoDetalhesComponent },
  { path: '**', redirectTo: '' }
]; 