import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionComponent } from './inscription.component';

@NgModule({
  declarations: [InscriptionComponent],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    FormsModule
  ],
  exports: [
    InscriptionComponent
  ]
})
export class InscriptionModule { }
