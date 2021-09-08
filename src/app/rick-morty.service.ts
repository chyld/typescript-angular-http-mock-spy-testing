import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode, Episodes } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  constructor(private httpClient: HttpClient) {}

  all(): Observable<Episodes> {
    let url = 'https://rickandmortyapi.com/api/episode';
    return this.httpClient.get<Episodes>(url);
  }

  getById(id: number): Observable<Episode> {
    let url = `https://rickandmortyapi.com/api/episode/${id}`;
    return this.httpClient.get<Episode>(url);
  }

  square(x: number): number {
    return x ** 2;
  }
}
