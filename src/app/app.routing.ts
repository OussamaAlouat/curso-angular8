import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TiendaComponent } from './components/tienda/tienda.component';

const appRoutes: Routes = [
  {path: '', component: TiendaComponent},
  {path: '', redirectTo: 'tienda', pathMatch: 'full'},
  {path: 'tienda', component: TiendaComponent}
];

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

