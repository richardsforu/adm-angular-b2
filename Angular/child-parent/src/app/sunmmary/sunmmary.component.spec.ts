import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunmmaryComponent } from './sunmmary.component';

describe('SunmmaryComponent', () => {
  let component: SunmmaryComponent;
  let fixture: ComponentFixture<SunmmaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunmmaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunmmaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
