import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../shared/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-king-jodi',
  standalone: true,
  imports: [],
  templateUrl: './king-jodi.component.html',
  styleUrl: './king-jodi.component.scss'
})
export class KingJodiComponent implements OnInit{
  kingResData:any
  filteredData:any[] = [];
  id:any
  name:any
  timeBreaks = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ]
  constructor(private globle:GlobalService, private actRouter: ActivatedRoute){
  this.filterDataByDate()
}

ngOnInit(): void {
  this.actRouter.paramMap.subscribe(p=>{
    this.id = p.get('id')
  })
  this.actRouter.queryParams.subscribe((parm:any)=>{
      
    this.name = parm.name
  })
  this.globle.getWithoutToken(`front/king-jodi/${this.id}`).subscribe({
    next: (res:any)=> {
      this.kingResData = res.data
      console.log(this.kingResData)
    },error: (err:any)=> {
      console.log(err)
    },
  })
}
  filterDataByDate() {
    for (let index = 0; index <= 31; index++) {
      // const formattedDate = this.formatDate(currentDate);
      if (index ) {
        this.filteredData.push({
          date: index
        });
      }

    }
    console.log(this.filteredData);
  }
  sortDataByIndex(data:any) {
    data.sort((a:any, b:any) => {
      return parseInt(a.date_index) - parseInt(b.date_index);
    });
  }



  getValueForDay(day:any,month:any){
    console.log(day+" "+ month)
  }

  formatDate(dayset:number, monthOffset:number) {
    // Get the current date
    const currentDate = new Date();
    const dayOffset  = dayset- 1
    // Define the starting date with the current year
    const startDate = new Date(currentDate.getFullYear(), 0, 1); // January 1 of the current year

    // Calculate the new date
    const newDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth() + monthOffset,
        startDate.getDate() + dayOffset 
    );

    // Get the components of the new date
    const day = String(newDate.getDate()).padStart(2, '0'); 
    const month = String(newDate.getMonth() + 1).padStart(2, '0')
    const year = newDate.getFullYear();
    const fullDate = `${day}/${month}/${year}`
    // Format the date as day/month/year
    const filterData = this.kingResData.filter((item:any)=>{
      return fullDate == item.date
    })
    let monthst = monthOffset + 1 
    if(fullDate == '30/04/2024'){
      console.log(filterData)
      console.log(monthst.toString()+ " "+ month)

    }if(fullDate == '31/04/2024'){
      console.log(filterData)

      console.log(monthst.toString()+ " "+ month)

    }
    return filterData.length > 0? filterData[0].jodi  : '-' ;
}


}
