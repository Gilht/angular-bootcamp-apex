import { Component } from '@angular/core';
import { CapitalizeDirectiveDirective } from '../../directives/capitalize-directive.directive';

@Component({
  selector: 'app-exercise-3',
  standalone: true,
  imports: [CapitalizeDirectiveDirective],
  templateUrl: './exercise-3.component.html',
  styleUrl: './exercise-3.component.scss'
})
export class Exercise3Component {

}
