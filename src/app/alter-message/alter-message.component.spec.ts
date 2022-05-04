import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterMessageComponent } from './alter-message.component';

describe('AlterMessageComponent', () => {
  let component: AlterMessageComponent;
  let fixture: ComponentFixture<AlterMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
