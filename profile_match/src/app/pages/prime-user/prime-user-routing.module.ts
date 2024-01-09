import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeUserComponent } from './prime-user/prime-user.component';

const routes: Routes = [
  { path: '', component: PrimeUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeUserRoutingModule { }
