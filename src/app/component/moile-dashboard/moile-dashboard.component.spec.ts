import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoileDashboardComponent } from './moile-dashboard.component';

describe('MoileDashboardComponent', () => {
  let component: MoileDashboardComponent;
  let fixture: ComponentFixture<MoileDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoileDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
