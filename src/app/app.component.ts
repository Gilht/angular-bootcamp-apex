import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercise3Component } from './components/exercise-3/exercise-3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercise3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercise-1-bootcamp';
}
