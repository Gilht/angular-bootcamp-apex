import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercise4Component } from './components/exercise-4/exercise-4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercise4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercise-1-bootcamp';
}
