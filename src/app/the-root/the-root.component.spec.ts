import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRootComponent } from './the-root.component';

describe('TheRootComponent', () => {
  let component: TheRootComponent;
  let fixture: ComponentFixture<TheRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
