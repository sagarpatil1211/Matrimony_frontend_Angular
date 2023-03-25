import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { LandingComponent } from './landing.component';
import { BusinessplansComponent } from './businessplans/businessplans.component';
import { SharedModule } from '../shared/shared.module';
import { RelationsComponent } from './relations/relations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReligionsComponent } from './religions/religions.component';
import { SubreligionsComponent } from './subreligions/subreligions.component';


@NgModule({
  declarations: [
    LandingComponent,
    BusinessplansComponent,
    RelationsComponent,
    ReligionsComponent,
    SubreligionsComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MastersModule { }
