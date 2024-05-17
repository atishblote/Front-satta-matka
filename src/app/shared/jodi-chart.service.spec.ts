import { TestBed } from '@angular/core/testing';

import { JodiChartService } from './jodi-chart.service';

describe('JodiChartService', () => {
  let service: JodiChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JodiChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
