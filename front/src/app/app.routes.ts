import { Routes } from '@angular/router';
import { RechargeComponent } from './recharge/recharge.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./recharge/recharge.component').then(mod => mod.RechargeComponent)
      }
];
