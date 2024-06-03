import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstModuleModule } from './modules/my-first-module/my-first-module.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercise-1-bootcamp';
}
