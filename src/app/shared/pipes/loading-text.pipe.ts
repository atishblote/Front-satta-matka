import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loadingText',
  standalone: true
})
export class LoadingTextPipe implements PipeTransform {

  transform(dayOfWeek: string): boolean {
    const currentDayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    return dayOfWeek.toLowerCase().includes(currentDayOfWeek);
  }

}
