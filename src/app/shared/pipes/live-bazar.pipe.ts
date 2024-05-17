import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'liveBazar',
  standalone: true
})
export class LiveBazarPipe implements PipeTransform {

  transform(openTime: string): boolean {
    const currentDate = new Date();
    const fifteenMinutesBefore = new Date(currentDate.getTime() - 15 * 60000);
    const fifteenMinutesafter = new Date(currentDate.getTime() + 15 * 60000);

    // Parse openTime
    const [time, meridiem] = openTime.split(/\s+/);

    let [hour, minute] = time.split(':').map(part => parseInt(part, 10));

    // Convert to 24-hour format if necessary
    if (meridiem && meridiem.toLowerCase() === 'pm' && hour !== 12) {
      hour += 12;
    } else if (meridiem && meridiem.toLowerCase() === 'am' && hour === 12) {
      hour = 0;
    }

    const openDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hour, minute);

    return currentDate >= fifteenMinutesBefore && currentDate < openDateTime;
  }

}
