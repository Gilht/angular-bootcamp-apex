import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-2.component.html',
  styleUrl: './exercise-2.component.scss',
})
export class Exercise2Component {
  public letters = ['a', 'b', 'c'];
}
