import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerbookComponent } from './stickerbook.component';

describe('StickerbookComponent', () => {
  let component: StickerbookComponent;
  let fixture: ComponentFixture<StickerbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
