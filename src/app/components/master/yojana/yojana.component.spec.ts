import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YojanaComponent } from './yojana.component';

describe('YojanaComponent', () => {
  let component: YojanaComponent;
  let fixture: ComponentFixture<YojanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YojanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YojanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
