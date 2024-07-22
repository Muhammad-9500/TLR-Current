import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningLineChartComponent } from './earning-line-chart.component';

describe('EarningLineChartComponent', () => {
  let component: EarningLineChartComponent;
  let fixture: ComponentFixture<EarningLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarningLineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
