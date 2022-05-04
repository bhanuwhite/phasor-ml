import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealstoryComponent } from './revealstory.component';

describe('RevealstoryComponent', () => {
  let component: RevealstoryComponent;
  let fixture: ComponentFixture<RevealstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevealstoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevealstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
