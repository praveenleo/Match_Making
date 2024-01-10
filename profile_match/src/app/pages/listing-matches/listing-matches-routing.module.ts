import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingMatchesComponent } from './listing-matches.component';

const routes: Routes = [
  // { path: '', component: ListingMatchesComponent },
  { path: '', redirectTo: '/matches', pathMatch: 'full' },
  { path: 'matches', component: ListingMatchesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingMatchesRoutingModule { }
