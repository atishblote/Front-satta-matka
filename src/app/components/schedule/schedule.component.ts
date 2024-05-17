import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../shared/global.service';
import { TimeStatusPipe } from '../../shared/pipes/time-status.pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  liveBazaarData: any;
  allArrayTrue: any;
  schedule: any;
  currentTimeString:any
  shouldShowData: boolean = false;
  allArrayFalse: any;

  constructor(private global: GlobalService) {}

  ngOnInit(): void {
    this.global.getWithToken("front/all-bazaar-todays").subscribe({
      next: (res: any) => {
        this.liveBazaarData = res.data;
        console.log(this.liveBazaarData);
        this.schedule = this.liveBazaarData;
        this.filterBazaarData();
        this.checkSchedule();
      },
      error: (err: any) => {
        console.error('Error fetching data:', err);
      }
    });
  }

  filterBazaarData(): void {
    this.allArrayTrue = this.liveBazaarData.filter((data: any) => data.is_highlighted == 1);
    this.allArrayFalse = this.liveBazaarData.filter((data: any) => data.is_highlighted != 1);
  }

  checkSchedule() {
    const currentTime = new Date();
     this.currentTimeString = this.formatTime(currentTime);

    this.schedule.forEach((item: any) => {
      if (this.currentTimeString >= item.open_time && this.currentTimeString <= item.close_time) {
        this.shouldShowData = true;
      }
    });
  }

  private formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}
