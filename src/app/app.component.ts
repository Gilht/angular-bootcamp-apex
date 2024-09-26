import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewModule } from './modules/new/new.module';
import { ProvidersModule } from './modules/providers/providers.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProvidersModule, NewModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercise-1-bootcamp';
}
