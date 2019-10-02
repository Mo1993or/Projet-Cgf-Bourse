import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilageComponent } from './profilage.component';

const routes: Routes = [
  {path:'',component:ProfilageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilageRoutingModule { }
