import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoEncapsulationComponent } from './Components/no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './Components/emulated-encapsulation/emulated-encapsulation.component';
import {
  ShadowDomEncapsulationComponent
} from "./Components/shadow-dom-encapusaltion/shadow-dom-encapusaltion.component";
import { AllEncapuslationComponent } from './Components/all-encapuslation/all-encapuslation.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    AllEncapuslationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
