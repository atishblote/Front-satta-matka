import { Component, OnInit } from '@angular/core';
import { JodiChartService } from '../../shared/jodi-chart.service';
import { GlobalService } from '../../shared/global.service';

@Component({
  selector: 'app-jodi-chart',
  standalone: true,
  imports: [],
  templateUrl: './jodi-chart.component.html',
  styleUrl: './jodi-chart.component.scss',
})
export class JodiChartComponent implements OnInit {
  jodiData: any;
  reArrayData: any[] = [];
  structuredData: any[] = [];
  dataddd: any = {}

  reverceData:any

  constructor(private global: GlobalService) {}

  ngOnInit(): void {
    this.global.getWithoutToken('jodi-panel/jodi/4').subscribe({
      next: (res: any) => {
        this.jodiData = res.data;
        console.log(this.jodiData);
        this.structuredData = this.jodiData;
        // this.structuredData = this.organizeData(this.jodiData);
        console.log(this.structuredData);
        this.datsDate(this.structuredData.length);
      },
    });
  }

  datsDate(length:any) {
    // Get the current date
    const currentDate = new Date();

    // Loop for the last 30 days
    for (let i = 0; i < length; i++) {
      // Calculate the date by subtracting the current loop index from the current date
      const loopDate = new Date(currentDate);
      loopDate.setDate(currentDate.getDate() - i);

      // Extract day, month, and year
      const day = loopDate.getDate().toString().padStart(2, '0');
      const month = (loopDate.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
      const year = loopDate.getFullYear();

      // Create a date string in "dd/mm/yyyy" format
      const dateString = `${day}/${month}/${year}`;

      const filterData = this.structuredData.filter((data)=>{
        return data.date_time == dateString
      })
      console.log(dateString)
      console.log(filterData)
      if(filterData.length != 0){
         this.dataddd = {
          "date":dateString,
          "jodi":filterData[0].jodi,
          "open": filterData[0].open,
          "close": filterData[0].close,
          "day":filterData[0].day
        }
      }else{
        this.dataddd = {
          "date":dateString,
          "jodi":"",
          "open": "",
          "close": "",
          "day":""
        }
      }
      this.reArrayData.push( this.dataddd)
    }
    console.log(this.reArrayData)
    this.reverceData = this.reArrayData.reverse()
    console.log(this.reverceData)
  }

  // organizeData(inputData: any[]): any[] {
  //   const structuredData: any[] = [];
  //   let currentRange: any;

  //   // Iterate through the input data
  //   for (const data of inputData) {
  //     const currentDate = new Date(data.date_time);
  //     const startDate = new Date(currentDate);
  //     startDate.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));

  //     const endDate = new Date(startDate);
  //     endDate.setDate(startDate.getDate() + 6);

  //     const dataDa = this.isSameWeek(currentRange.startDate, startDate)
  //     console.log(dataDa)
  //     // Check if the current range is defined and if the date is within the current range
  //     if (currentRange && dataDa) {
  //       currentRange.days.push({
  //         [data.day.toLowerCase()]: true,
  //         open: data.open,
  //         close: data.close,
  //         jodi: data.jodi,
  //       });
  //     } else {
  //       // If the date is not within the current range, start a new range
  //       currentRange = {
  //         startDate,
  //         endDate,
  //         days: [
  //           {
  //             [data.day.toLowerCase()]: true,
  //             open: data.open,
  //             close: data.close,
  //             jodi: data.jodi,
  //           },
  //         ],
  //       };

  //       structuredData.push(currentRange);
  //     }
  //   }

  //   // Fill in missing days within each range
  //   structuredData.forEach((range) => {
  //     const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  //     for (let i = 0; i < daysOfWeek.length; i++) {
  //       const dayName = daysOfWeek[i].toLowerCase();

  //       // If the day is not present in the range, add placeholder information
  //       if (!range.days.some((day:any) => Object.keys(day)[0] === dayName)) {
  //         range.days.push({
  //           [dayName]: false,
  //           open: '',
  //           close: '',
  //           jodi: '',
  //         });
  //       }
  //     }

  //     // Sort the days within the range by day order (sunday to saturday)
  //     range.days.sort((a:any, b:any) => daysOfWeek.indexOf(Object.keys(a)[0]) - daysOfWeek.indexOf(Object.keys(b)[0]));
  //   });

  //   return structuredData;
  // }

  // isSameWeek(date1: Date, date2: Date): boolean {
  //   const weekStartDate1 = new Date(date1);
  //   weekStartDate1.setDate(date1.getDate() - date1.getDay() + (date1.getDay() === 0 ? -6 : 1));

  //   const weekStartDate2 = new Date(date2);
  //   weekStartDate2.setDate(date2.getDate() - date2.getDay() + (date2.getDay() === 0 ? -6 : 1));

  //   return weekStartDate1.getTime() === weekStartDate2.getTime();
  // }
}
