import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ElementPanier } from '../models/element-panier';
import { Livre } from '../models/livre';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  $panier = new BehaviorSubject<ElementPanier[]>([]);

  constructor() { }

  ajouter(livre: Livre) {
    const panier = this.$panier.getValue();
    panier.push(this.livreToPanierMapper(livre));
    this.$panier.next(panier);
  }

  livreToPanierMapper(livre: Livre): ElementPanier {
    return {
      livre: livre,
      quantite: 1
    };
  }

  augmenteQuantite() {

  }

  reduirQuantite() {

  }

  calculerTotal(): number {
    let total = 0;
    const panier = this.$panier.getValue();
    total = panier.reduce((accumulateur: number, valeurCourante: ElementPanier): number => {
      return accumulateur + (valeurCourante.livre.price * valeurCourante.quantite);
    }, 0);

    return total;
  }
}
