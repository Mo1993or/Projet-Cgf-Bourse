import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { ListDemandeComponent } from './components/list-demande/list-demande.component';
import { ValiderCompteComponent } from './components/valider-compte/valider-compte.component';
import { SearchPipePipe } from './search-pipe.pipe';


@NgModule({
  declarations: [BackOfficeComponent, ListDemandeComponent,
    ValiderCompteComponent,
    SearchPipePipe],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    FormsModule
  ],
  exports: [
    BackOfficeComponent,
    ListDemandeComponent,
    ValiderCompteComponent,
    SearchPipePipe

  ]
})
export class BackOfficeModule { }
