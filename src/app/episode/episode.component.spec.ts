import { Location } from '@angular/common';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EpisodeComponent } from './episode.component';
import { routes } from '../app-routing.module';
import { of } from 'rxjs';

describe('EpisodeComponent', () => {
  let component: EpisodeComponent;
  let fixture: ComponentFixture<EpisodeComponent>;
  let httpTestingController: HttpTestingController;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    function fakeSubscribe(fn: any) {
      fn({ get: () => 9 });
    }

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ],
      declarations: [EpisodeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap: { subscribe: fakeSubscribe } },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    router.initialNavigation();
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a single episode', () => {
    httpTestingController.expectOne(
      'https://rickandmortyapi.com/api/episode/9'
    );
    httpTestingController.verify();
  });

  it('should navigate to a different episode', fakeAsync(() => {
    // console.log('running nav');
    // router.navigate(['/episode', 5]);
    // console.log('url:', router.url);
    // tick();
    // console.log('url:', router.url);
    //expect(location.path()).toBe('/episode/5');
  }));
});
