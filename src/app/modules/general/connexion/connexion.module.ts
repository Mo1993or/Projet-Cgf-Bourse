import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion.component';

@NgModule({
  declarations: [ConnexionComponent],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    FormsModule
  ],
  exports: [
    ConnexionComponent
  ]
})
export class ConnexionModule { }
