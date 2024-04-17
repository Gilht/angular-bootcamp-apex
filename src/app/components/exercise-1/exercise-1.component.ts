import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-1.component.html',
  styleUrl: './exercise-1.component.scss'
})
export class Exercise1Component {
  active: boolean = false; 

constructor() {

}
  handleToggle () {
    this.active = !this.active
  }
}
