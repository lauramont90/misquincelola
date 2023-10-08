import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeXvComponent } from './home-xv.component';

describe('HomeXvComponent', () => {
  let component: HomeXvComponent;
  let fixture: ComponentFixture<HomeXvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeXvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeXvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
