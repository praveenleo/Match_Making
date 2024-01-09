import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',  loadChildren: () => import('src/app/pages/listing-matches/listing-matches.module').then(m => m.ListingMatchesModule)},
  { path: 'primeUser',  loadChildren: () => import('src/app/pages/prime-user/prime-user.module').then(m => m.PrimeUserModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
