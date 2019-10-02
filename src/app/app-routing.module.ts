import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    loadChildren: './modules/general/about/about.module#AboutModule',
  },
  {
    path: 'profile/:userId',
    loadChildren: './modules/application/profile-client/profile-client.module#ProfileClientModule',
  },
  {
    path: 'backoffice',
    loadChildren: './modules/application/back-office/back-office.module#BackOfficeModule',
  },
  {
    path: 'profilage',
    loadChildren: './modules/application/profilage/profilage.module#ProfilageModule',
  },
  {
    path: 'connexion',
    loadChildren: './modules/general/connexion/connexion.module#ConnexionModule',
  },
  {
    path: 'inscription',
    loadChildren: './modules/general/inscription/inscription.module#InscriptionModule',
  },
  {
    path: 'contact',
    loadChildren: './modules/general/contact/contact.module#ContactModule',
  },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
