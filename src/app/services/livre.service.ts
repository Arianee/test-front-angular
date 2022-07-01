import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Livre } from '../models/livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor() { }

  getBooks(): Observable<Livre[]> {
    return of([]);
  }
}
