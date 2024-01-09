import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeUserRoutingModule } from './prime-user-routing.module';
import { PrimeUserComponent } from './prime-user/prime-user.component';


@NgModule({
  declarations: [
    PrimeUserComponent
  ],
  imports: [
    CommonModule,
    PrimeUserRoutingModule
  ]
})
export class PrimeUserModule { }
