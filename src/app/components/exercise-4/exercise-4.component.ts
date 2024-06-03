import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise-4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercise-4.component.html',
  styleUrl: './exercise-4.component.scss'
})
export class Exercise4Component {
  protected oneWayDataBinding: string = "Hello World";
  protected twoWayDataBinding: string = "Hello World"
constructor() {}

public handleBinding(): void{
alert("I was triggered by an event")
}

}


