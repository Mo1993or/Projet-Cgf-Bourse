import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { ConnexionModule } from 'src/app/modules/general/connexion/connexion.module';
import { InscriptionModule } from 'src/app/modules/general/inscription/inscription.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    ConnexionModule,
    InscriptionModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
