import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainScrollerGameComponent } from './train-scroller-game.component';

describe('TrainScrollerGameComponent', () => {
  let component: TrainScrollerGameComponent;
  let fixture: ComponentFixture<TrainScrollerGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainScrollerGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainScrollerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
