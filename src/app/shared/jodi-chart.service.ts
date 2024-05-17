import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JodiChartService {
  private bazaarDataSubject = new BehaviorSubject<any>(null);
  bazaarData$: Observable<any> = this.bazaarDataSubject.asObservable();

  jodiChartData$: Observable<any[]> = this.bazaarData$.pipe(
    map(bazaarData => this.convertBazaarToJodiChartData(bazaarData))
  );

  updateBazaarData(data: any): void {
    this.bazaarDataSubject.next(data);
  }

  private convertBazaarToJodiChartData(bazaarData: any): any[] {
    // Implement logic to convert bazaar data to jodi chart data
    // Modify the logic based on your actual data structure
    return [
      {
        startDate: '22-11-2023',
        endDate: '12-10-2023',
        jodiValues: ['10', '12', '14', '55', '58', '57', '**'],
      },
      // Add more data as needed
    ];
  }
}
