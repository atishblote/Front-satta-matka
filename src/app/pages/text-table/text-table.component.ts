import { Component, OnInit } from '@angular/core';
// interface BazaarData {
//   id: number;
//   bazaar_id: number;
//   date_time: string;
//   open: string;
//   close: string;
//   jodi: string;
//   is_active: number;
//   create_at: string;
//   day: string;
// }
@Component({
  selector: 'app-text-table',
  standalone: true,
  imports: [],
  templateUrl: './text-table.component.html',
  styleUrl: './text-table.component.scss',
})
export class TextTableComponent implements OnInit{
  // bazaarData:any
  bazaarData:any
  open_days: number[] = [0, 1, 2, 3, 4, 5, 6];

  constructor(){
    this.bazaarData = [
      {
        id: 30,
        bazaar_id: 4,
        date_time: '05/03/2024',
        open: '156',
        close: '845',
        jodi: '05',
        is_active: 0,
        create_at: '2024-03-05T15:15:23.193Z',
        day: 'Tuesday',
      },
      {
        id: 29,
        bazaar_id: 4,
        date_time: '04/03/2024',
        open: '895',
        close: '545',
        jodi: '04',
        is_active: 1,
        create_at: '2024-03-05T15:13:25.014Z',
        day: 'Monday',
      },
      {
        id: 27,
        bazaar_id: 4,
        date_time: '03/03/2024',
        open: '',
        close: '',
        jodi: '-',
        is_active: 1,
        create_at: '2024-03-02T18:33:49.941Z',
        day: 'Sunday',
      },
      {
        id: 17,
        bazaar_id: 4,
        date_time: '02/03/2024',
        open: '545',
        close: '454',
        jodi: '02',
        is_active: 1,
        create_at: '2024-03-02T18:33:20.972Z',
        day: 'Saturday',
      },
      {
        id: 15,
        bazaar_id: 4,
        date_time: '01/03/2024',
        open: '542',
        close: '565',
        jodi: '01',
        is_active: 0,
        create_at: '2024-03-02T18:33:08.316Z',
        day: 'Friday',
      },
      {
        id: 13,
        bazaar_id: 4,
        date_time: '29/02/2024',
        open: '152',
        close: '152',
        jodi: '29',
        is_active: 1,
        create_at: '2024-03-02T18:32:54.659Z',
        day: 'Thursday',
      },
      {
        id: 9,
        bazaar_id: 4,
        date_time: '28/02/2024',
        open: '155',
        close: '454',
        jodi: '28',
        is_active: 1,
        create_at: '2024-03-02T18:32:38.631Z',
        day: 'Wednesday',
      },
      {
        id: 7,
        bazaar_id: 4,
        date_time: '27/02/2024',
        open: '150',
        close: '656',
        jodi: '27',
        is_active: 1,
        create_at: '2024-03-02T18:32:24.918Z',
        day: 'Tuesday',
      },
      {
        id: 5,
        bazaar_id: 4,
        date_time: '26/02/2024',
        open: '120',
        close: '125',
        jodi: '26',
        is_active: 1,
        create_at: '2024-03-02T18:32:09.487Z',
        day: 'Wednesday',
      },
      {
        id: 14,
        bazaar_id: 4,
        date_time: '25/02/2024',
        open: '',
        close: '',
        jodi: '',
        is_active: 0,
        create_at: '2024-03-02T18:29:16.128Z',
        day: 'Sunday',
      },
      {
        id: 12,
        bazaar_id: 4,
        date_time: '24/02/2024',
        open: '121',
        close: '212',
        jodi: '24',
        is_active: 0,
        create_at: '2024-02-27T17:28:08.053Z',
        day: 'Saturday',
      },
      {
        id: 11,
        bazaar_id: 4,
        date_time: '23/02/2024',
        open: '121',
        close: '121',
        jodi: '21',
        is_active: 0,
        create_at: '2024-02-27T17:27:49.341Z',
        day: 'Friday',
      },
      {
        id: 16,
        bazaar_id: 4,
        date_time: '22/02/2024',
        open: '154',
        close: '454',
        jodi: '12',
        is_active: 0,
        create_at: '2024-03-01T17:56:48.756Z',
        day: 'Thursday',
      },
      {
        id: 26,
        bazaar_id: 4,
        date_time: '21/02/2024',
        open: '879',
        close: '522',
        jodi: '25',
        is_active: 0,
        create_at: '2024-03-02T16:09:07.670Z',
        day: 'Wednesday',
      },
      {
        id: 25,
        bazaar_id: 4,
        date_time: '20/02/2024',
        open: '878',
        close: '877',
        jodi: '20',
        is_active: 0,
        create_at: '2024-03-02T18:35:19.433Z',
        day: 'Tuesday',
      },
      {
        id: 24,
        bazaar_id: 4,
        date_time: '19/02/2024',
        open: '844',
        close: '',
        jodi: '19',
        is_active: 0,
        create_at: '2024-03-02T18:35:01.945Z',
        day: 'Monday',
      },
      {
        id: 23,
        bazaar_id: 4,
        date_time: '17/02/2024',
        open: '545',
        close: '454',
        jodi: '54',
        is_active: 0,
        create_at: '2024-03-02T16:05:07.447Z',
        day: 'Saturday',
      },
      {
        id: 22,
        bazaar_id: 4,
        date_time: '16/02/2024',
        open: '887',
        close: '788',
        jodi: '85',
        is_active: 0,
        create_at: '2024-03-02T16:04:50.918Z',
        day: 'Friday',
      },
      {
        id: 21,
        bazaar_id: 4,
        date_time: '15/02/2024',
        open: '454',
        close: '545',
        jodi: '54',
        is_active: 0,
        create_at: '2024-03-02T16:04:34.377Z',
        day: 'Thursday',
      },
      {
        id: 20,
        bazaar_id: 4,
        date_time: '14/02/2024',
        open: '795',
        close: '845',
        jodi: '56',
        is_active: 1,
        create_at: '2024-03-02T16:03:26.712Z',
        day: 'Wednesday',
      },
      {
        id: 19,
        bazaar_id: 4,
        date_time: '13/02/2024',
        open: '544',
        close: '545',
        jodi: '58',
        is_active: 0,
        create_at: '2024-03-02T15:46:22.539Z',
        day: 'Tuesday',
      },
      {
        id: 18,
        bazaar_id: 4,
        date_time: '12/02/2024',
        open: '546',
        close: '454',
        jodi: '45',
        is_active: 0,
        create_at: '2024-03-02T15:45:49.887Z',
        day: 'Monday',
      },
    ];
  }

  ngOnInit(): void {
    // this.bazaarData = this.result
  }
  getResultData(result: any, day: number) {
    // Perform logic to retrieve data based on result and day
    // For example, filter the data based on the day
    const resultForDay = result.filter((data:any) =>{
      return 0
    });
    console.log(result)
    console.log(day)

    // Return the specific data or null if no data found
    if (resultForDay.length > 0) {
      return {
        open: resultForDay[0].open,
        close: resultForDay[0].close,
        jodi: resultForDay[0].jodi,
      };
    } else {
      return null;
    }
  }
}
