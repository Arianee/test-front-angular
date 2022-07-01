import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { PanierService } from '../../services/panier.service';
import { ElementPanier } from '../../models/element-panier';

@Component({
  selector: 'app-resume-panier',
  templateUrl: './resume-panier.component.html',
  styleUrls: ['./resume-panier.component.scss']
})
export class ResumePanierComponent implements OnInit {

  panier: ElementPanier[] = [];

  constructor(
    public panierService: PanierService,
  ) { }

  ngOnInit(): void {
    this.panierService.$panier
      .pipe(first())
      .subscribe((data: ElementPanier[]) => {
        this.panier = data;
    });
  }

}
