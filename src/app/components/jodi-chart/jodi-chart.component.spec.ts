import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JodiChartComponent } from './jodi-chart.component';

describe('JodiChartComponent', () => {
  let component: JodiChartComponent;
  let fixture: ComponentFixture<JodiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JodiChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JodiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
