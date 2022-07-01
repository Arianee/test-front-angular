import { Component, OnInit } from '@angular/core';
import { LivreService } from '../../services/livre.service';
import { Livre } from '../../models/livre';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {

  livres: Livre[] = [];
  searchValue!: string;
  categories!: FormGroup;

  constructor(
    private livreService: LivreService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.intiFiltre();
  }

  intiFiltre() {
    this.categories = this.fb.group({
      adventure: false,
      action: false,
      comedy: false,
      horror: false,
      thriller: false,
    });
  }

}
