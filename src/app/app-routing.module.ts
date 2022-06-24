import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmulatedEncapsulationComponent} from "./Components/emulated-encapsulation/emulated-encapsulation.component";
import {NoEncapsulationComponent} from "./Components/no-encapsulation/no-encapsulation.component";
import {
  ShadowDomEncapsulationComponent
} from "./Components/shadow-dom-encapusaltion/shadow-dom-encapusaltion.component";
import {AllEncapuslationComponent} from "./Components/all-encapuslation/all-encapuslation.component";

const routes: Routes = [
  {
    path: 'emulated',
    component: EmulatedEncapsulationComponent
  },
  {
    path: 'no',
    component: NoEncapsulationComponent
  },
  {
    path: 'shadowDom',
    component: ShadowDomEncapsulationComponent
  },
  {
    path: 'all',
    component: AllEncapuslationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
