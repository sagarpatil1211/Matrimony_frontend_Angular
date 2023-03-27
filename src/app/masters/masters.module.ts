import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { LandingComponent } from './landing.component';
import { BusinessplansComponent } from './businessplans/businessplans.component';
import { SharedModule } from '../shared/shared.module';
import { BusinessesComponent } from './businesses/businesses.component';
import { PlansComponent } from './plans/plans.component';


@NgModule({
  declarations: [
    LandingComponent,
    BusinessplansComponent,
    BusinessesComponent,
    PlansComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    SharedModule
  ]
})
export class MastersModule { }
