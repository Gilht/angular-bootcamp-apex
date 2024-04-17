import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercise2Component } from './components/exercise-2/exercise-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercise2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercise-1-bootcamp';
}
