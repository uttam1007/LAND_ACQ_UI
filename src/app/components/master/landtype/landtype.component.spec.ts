import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandtypeComponent } from './landtype.component';

describe('LandtypeComponent', () => {
  let component: LandtypeComponent;
  let fixture: ComponentFixture<LandtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
