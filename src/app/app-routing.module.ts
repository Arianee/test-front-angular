import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BoutiqueComponent } from './pages/boutique/boutique.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
