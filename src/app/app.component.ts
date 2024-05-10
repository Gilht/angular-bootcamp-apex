import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomComponent } from './components/custom/custom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercise-1-bootcamp';
}
