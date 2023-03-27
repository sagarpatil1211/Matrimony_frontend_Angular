import { PlansComponent } from './plans/plans.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessplansComponent } from './businessplans/businessplans.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {path:"",component:LandingComponent, children:[
    {path:"",component:BusinessplansComponent},
    {path:"businessplans",component:BusinessplansComponent},
    {path:"plans",component:PlansComponent},

    {path:"businesses",component:BusinessesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
