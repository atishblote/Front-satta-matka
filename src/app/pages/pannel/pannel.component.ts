import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../shared/global.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pannel',
  standalone: true,
  imports: [],
  templateUrl: './pannel.component.html',
  styleUrl: './pannel.component.scss'
})
export class PannelComponent implements OnInit {
  jodiData: any;
  dataddd:any
  reArrayData: any[] = [];
  structuredData: any[] = [];
  dataArray: any;
  orginzedDataArray: any;
  reverceData: any;
  jodiId:any
  name:any

  constructor(private global: GlobalService, private  router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe(p => {
      this.jodiId = p.get('id')
    });
    this.router.queryParamMap.subscribe(p =>{
      this.name = p.get('name')
    })
    this.global.getWithoutToken(`front/jodi/${this.jodiId}`).subscribe({
      next: (res: any) => {
        this.jodiData = res.data;
        console.log(this.jodiData);
        this.structuredData = this.jodiData;
        this.organizeDataByWeek(this.jodiData);
      },
    });
  }

  getISOWeek(date: Date): number {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + startOfYear.getDay() + 1) / 7);
  }

  findFirstMonday(date: Date): Date {
    while (date.getDay() !== 1) {
      date.setDate(date.getDate() + 1);
    }
    return date;
  }

  organizeDataByWeek(apiData: any[]): void {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentWeekNumber = this.getISOWeek(currentDate);
  
    const organizedData: any[] = [];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Iterate over weeks starting from the first Monday of the last month
    for (let week = 0; week < currentWeekNumber - 1; week++) { // Exclude the current week
      const baseDate = new Date(currentDate.getFullYear(), currentMonth - 1, 1); // Use last month
      const firstMondayOfMonth = this.findFirstMonday(baseDate);
  
      var weekData: any[] = [];
  
      for (let i = 0; i < 7; i++) {
        const currentDay = new Date(firstMondayOfMonth);
        currentDay.setDate(firstMondayOfMonth.getDate() + (week * 7) + i);
  
        const day = daysOfWeek[currentDay.getDay()];
        const formattedDate = this.formatDate(currentDay);
  
        const dayData = {
          day: day,
          date: formattedDate,
          jodi: "",
          open: "",
          close: ""
        };
  
        const matchingData = apiData.find(data => data && data.date_time === formattedDate);
  
        if (matchingData) {
          dayData.jodi = matchingData.jodi || "-";
          dayData.open = matchingData.open || "-";
          dayData.close = matchingData.close || "-";
        }
  
        weekData.push(dayData);
      }
  
      weekData = weekData.reverse();
  
      // Ensure weekData is not empty before accessing its properties
      if (weekData.length > 0) {
        const weekStartDate = weekData[0].date;
        const weekEndDate = weekData[6].date;
  
        organizedData.push({
          startDate: weekStartDate,
          endDate: weekEndDate,
          days: weekData
        });
      }
    }
  
    console.log(organizedData);
    this.dataArray = organizedData;
    this.orginzedDataArray = this.dataArray;
    console.log(this.orginzedDataArray);
  }
  
  
  
  
  
  
  

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }



  getValueForDay(week: any, day: string): string {
    const dayData = week.days.find((item: any) => item.day === day);
    if(dayData.jodi == ''){
      return '-';
    } else {
      const datr = `
      <div class="d_grid">
      <div> ${dayData.open}</div>
      <div>${dayData.jodi}</div>
      <div>
      ${dayData.close}
      </div> </div>`
      return datr
      // return dayData.jodi;
    }
  }

 
}

