import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartComponentComponent } from './heart-component.component';

describe('HeartComponentComponent', () => {
  let component: HeartComponentComponent;
  let fixture: ComponentFixture<HeartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
