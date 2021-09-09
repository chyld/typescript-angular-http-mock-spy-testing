import { Component } from '@angular/core';
import { RickMortyService } from './rick-morty.service';
import { Episodes, Episode, Character } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alpha';
  episodes?: Episodes;
  squared = 0;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.squared = this.rickMortyService.square(3);

    // subscribe takes an object
    this.rickMortyService.all().subscribe({
      next: (episodes) => {
        this.episodes = episodes;
      },
      error: (err) => console.log('err:', err),
      complete: () => console.log('completed'),
    });
  }
}
