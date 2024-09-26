import { Component, isDevMode, OnInit } from '@angular/core';
import { RootService } from '../../services/root.service';

@Component({
  selector: 'app-external',
  standalone: false,
  templateUrl: './external.component.html',
  styleUrl: './external.component.scss'
})
export class ExternalComponent implements OnInit{

  injectableVariable: string = "";

  constructor(protected rootService: RootService){}

  ngOnInit(): void {
    this.injectableVariable = this.rootService.persistenData
  }
}
