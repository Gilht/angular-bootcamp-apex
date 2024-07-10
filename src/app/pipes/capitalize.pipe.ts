import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const newText = value
    .split(' ')
    .map((sub) => sub[0].toUpperCase() + sub.slice(1))
    .join(' ');
    return newText;
  }

}
