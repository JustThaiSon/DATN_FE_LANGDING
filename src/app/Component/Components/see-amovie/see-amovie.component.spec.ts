import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAMovieComponent } from './see-amovie.component';

describe('SeeAMovieComponent', () => {
  let component: SeeAMovieComponent;
  let fixture: ComponentFixture<SeeAMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeAMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeAMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
