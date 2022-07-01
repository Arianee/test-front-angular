import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../services/panier.service';
import { ElementPanier } from '../../models/element-panier';

@Component({
  selector: 'app-total-panier',
  templateUrl: './total-panier.component.html',
  styleUrls: ['./total-panier.component.scss']
})
export class TotalPanierComponent implements OnInit {

  panier: ElementPanier[] = [];
  totalPanier = 0;

  constructor(
    private panierService: PanierService,
  ) { }

  ngOnInit(): void {
    this.panierService.$panier.subscribe((data: ElementPanier[]) => {
      this.panier = data;
      this.totalPanier = this.panierService.calculerTotal();
    });
  }

}
