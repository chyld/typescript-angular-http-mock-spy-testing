import { Component } from '@angular/core';
import { RickMortyService } from './rick-morty.service';
import { Episodes, Episode } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alpha';
  episodes?: Episodes;
  single?: Episode;
  squared = 0;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.squared = this.rickMortyService.square(3);

    // subscribe takes an object
    this.rickMortyService.all().subscribe({
      next: (data) => {
        this.episodes = data;
      },
      error: (err) => console.log('err:', err),
      complete: () => console.log('completed'),
    });

    // or subscribe can take 3 functions
    this.rickMortyService.getById(1).subscribe(
      (data) => {
        this.single = data;
      },
      (err) => {
        console.log('err:', err);
      },
      () => {
        console.log('complete');
      }
    );
  }
}
