import { Injectable, ɵSWITCH_IVY_ENABLED__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode, Episodes, Character } from './types';
import { Observable, of, forkJoin } from 'rxjs';
import { mergeMap, map, tap, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  constructor(private httpClient: HttpClient) {}

  all(): Observable<Episodes> {
    let url = 'https://rickandmortyapi.com/api/episode';
    return this.httpClient.get<Episodes>(url);
  }

  getById(id: number): Observable<[Episode, Character[]]> {
    let url = `https://rickandmortyapi.com/api/episode/${id}`;
    return this.httpClient.get<Episode>(url).pipe(
      mergeMap((episode) => {
        let ids = episode.characters.map((url) => url.split('/')[5]);
        let url = `https://rickandmortyapi.com/api/character/${ids.join(',')}`;
        let obs1 = of(episode);
        let obs2 = this.httpClient.get<Character[]>(url);
        return forkJoin([obs1, obs2]);
      })
    );
  }

  square(x: number): number {
    return x ** 2;
  }
}
