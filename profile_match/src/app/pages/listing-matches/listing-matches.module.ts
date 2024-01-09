import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingMatchesRoutingModule } from './listing-matches-routing.module';
import { ListingMatchesComponent } from './listing-matches.component';
import { AngularMaterialModule } from 'src/app/angular-material.ts/angular-material.module';


@NgModule({
  declarations: [
    ListingMatchesComponent
  ],
  imports: [
    CommonModule,
    ListingMatchesRoutingModule,
    AngularMaterialModule
  ]
})
export class ListingMatchesModule { }
