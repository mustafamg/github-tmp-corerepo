import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'facilities', loadChildren: () => import('./modules/facilities/facilities.module').then(a => a.FacilitiesModule) },
  { path: 'reservations', loadChildren: () => import('./modules/reservations/reservations.module').then(m => m.ReservationsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
