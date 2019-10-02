import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilageRoutingModule } from './profilage-routing.module';
import { ProfilageComponent } from './profilage.component';

@NgModule({
  declarations: [ProfilageComponent],
  imports: [
    CommonModule,
    ProfilageRoutingModule
  ],
  exports:[
    ProfilageComponent
  ]
})
export class ProfilageModule { }
