import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindATheatreComponent } from './find-atheatre.component';

describe('FindATheatreComponent', () => {
  let component: FindATheatreComponent;
  let fixture: ComponentFixture<FindATheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindATheatreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindATheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
