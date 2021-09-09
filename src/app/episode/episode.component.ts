import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RickMortyService } from '../rick-morty.service';
import { Character, Episode } from '../types';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
})
export class EpisodeComponent implements OnInit {
  episode?: Episode;
  characters: Character[] = [];

  constructor(
    private service: RickMortyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      let id = p.get('id');
      this.service.getById(Number(id)).subscribe((data) => {
        this.episode = data[0];
        this.characters = data[1];
      });
    });
  }
}
