import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BoutiqueComponent } from './pages/boutique/boutique.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { ElementBoutiqueComponent } from './components/element-boutique/element-boutique.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumePanierComponent } from './components/resume-panier/resume-panier.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsLivreDialogComponent } from './components/details-livre-dialog/details-livre-dialog.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TotalPanierComponent } from './components/total-panier/total-panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BoutiqueComponent,
    PanierComponent,
    AuthentificationComponent,
    ElementBoutiqueComponent,
    ResumePanierComponent,
    DetailsLivreDialogComponent,
    TotalPanierComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
