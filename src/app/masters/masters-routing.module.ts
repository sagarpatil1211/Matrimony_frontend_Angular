import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessplansComponent } from './businessplans/businessplans.component';
import { LandingComponent } from './landing.component';
import { RelationsComponent } from './relations/relations.component';
import { ReligionsComponent } from './religions/religions.component';
import { SubreligionsComponent } from './subreligions/subreligions.component';

const routes: Routes = [
  {
    path: "", component: LandingComponent, children: [
      { path: "businessplans", component: BusinessplansComponent },
      { path: "relations", component: RelationsComponent },
      { path: "religions", component: ReligionsComponent },
      { path: "subreligion/:religionid", component: SubreligionsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
