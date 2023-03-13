import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FacilitiesComponent } from './facilities.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: FacilitiesComponent, 
    children: [
      { path: 'list', component: ListComponent },
      { path: 'details/:id', component: DetailsComponent },
  ]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }
