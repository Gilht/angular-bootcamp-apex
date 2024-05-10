import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTransform',
  standalone: true
})
export class CustomTransformPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const newText = value
    .split(' ')
    .map((sub) => sub[0].toUpperCase() + sub.slice(1))
    .join(' ');
    return newText;
  }

}
