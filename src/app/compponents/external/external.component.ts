import { Component, isDevMode, OnInit } from '@angular/core';
import { RootService } from '../../services/root.service';

@Component({
  selector: 'app-external',
  standalone: false,
  templateUrl: './external.component.html',
  styleUrl: './external.component.scss'
})
export class ExternalComponent {

  constructor(protected rootService: RootService){}
}
