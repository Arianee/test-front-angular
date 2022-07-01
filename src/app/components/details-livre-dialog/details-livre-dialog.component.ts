import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Livre } from '../../models/livre';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-details-livre-dialog',
  templateUrl: './details-livre-dialog.component.html',
  styleUrls: ['./details-livre-dialog.component.scss']
})
export class DetailsLivreDialogComponent {

  constructor(
    private dialog: MatDialogRef<DetailsLivreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Livre,
    private panierService: PanierService,
  ) { }

  ajouterAuPanier() {
    this.panierService.ajouter(this.data);
  }

}
