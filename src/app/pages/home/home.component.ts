import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GlobalService } from '../../shared/global.service';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { TimeStatusPipe } from '../../shared/pipes/time-status.pipe';
import { Meta } from '@angular/platform-browser';
import { LoadingTextPipe } from '../../shared/pipes/loading-text.pipe';
import { LiveBazarPipe } from '../../shared/pipes/live-bazar.pipe';
import { TimeToSecondsPipe } from '../../shared/pipes/time-to-seconds.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass, TimeStatusPipe, LoadingTextPipe, LiveBazarPipe, TimeToSecondsPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  liveBazaarData:any
  starlineBazarData:any
  kingBazarData:any
  allArrayTrue:any[] = []
  allArrayFalse:any[] = []
  constructor(private meta:Meta, private global:GlobalService , @Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit(): void {
    // this.meta.addTags([
    //   { name: "title", content:"Prabhat | Best Satta Matka site"},
    //   { name: 'description', content: 'This is an article about Angular Meta service' }, 
    //   { name: 'keywords', content: 'Angular SEO, Angular Universal' },
    //   { name: 'robots', content: 'index, follow' },
    //   { name: 'author', content: 'Ronak Patel' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { name: 'date', content: '2021-05-17', scheme: 'YYYY-MM-DD' },
    //   { charset: 'UTF-8' }
    // ]);
    this.meta.updateTag(
      { name: 'description', content: 'This is an article about Angular Meta service home page' }
    )
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.reload()
      this.getStarline()
      this.getKing()
    }
  }
  reload(){
    this.global.getWithToken("front/all-bazaar-todays").subscribe({
      next: (res: any) => {
        this.liveBazaarData = res.data;
        console.log(this.liveBazaarData);
      },
      error: (err: any) => {
        console.error('Error fetching data:', err);
      }
    });
  }

  getStarline(){
    this.global.getWithToken("front/starline-jodi").subscribe({
      next: (res: any) => {
        this.starlineBazarData = res.data;
        console.log(this.starlineBazarData);
      },
      error: (err: any) => {
        console.error('Error fetching data:', err);
      }
    });
  }

  getKing(){
    this.global.getWithToken("front/king-jodi").subscribe({
      next: (res: any) => {
        this.kingBazarData = res.data;
        console.log(this.kingBazarData);
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
}
