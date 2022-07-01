import { Component, Input, OnInit } from '@angular/core';
import { Livre } from '../../models/livre';
import { PanierService } from '../../services/panier.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsLivreDialogComponent } from '../details-livre-dialog/details-livre-dialog.component';

@Component({
  selector: 'app-element-boutique',
  templateUrl: './element-boutique.component.html',
  styleUrls: ['./element-boutique.component.scss']
})
export class ElementBoutiqueComponent implements OnInit {

  @Input() livre!: Livre;

  constructor(
    private panierService: PanierService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  ajouterAuPanier() {
    this.panierService.ajouter(this.livre);
  }

  afficherDetails() {
    this.dialog.open(DetailsLivreDialogComponent, {
      width: '700px',
      data: this.livre
    });
  }

}
