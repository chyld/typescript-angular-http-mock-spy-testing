import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { RickMortyService } from './rick-morty.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let mockService: any;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj(['all', 'getById', 'square']);
    mockService.getById.and.returnValue(of([{ name: 'Ricky Goes to Space' }]));
    mockService.all.and.returnValue(
      of({
        results: [{ name: 'Ricky1' }, { name: 'Ricky2' }, { name: 'Ricky3' }],
      })
    );

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: RickMortyService, useValue: mockService }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'alpha'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('alpha');
  });

  it('should display all episodes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.episodes?.results.length).toBe(3);
  });

  it('should square a number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    // spying on a function call
    expect(mockService.square.calls.count()).toBe(1);
  });
});
