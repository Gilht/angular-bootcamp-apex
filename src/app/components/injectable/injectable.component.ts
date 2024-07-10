import { Component, OnInit } from '@angular/core';
import { InjectableService } from '../../services/injectable.service';
import { RootService } from '../../services/root.service';

@Component({
  selector: 'app-injectable',
  standalone: false,
  templateUrl: './injectable.component.html',
  styleUrl: './injectable.component.scss',
  
})
export class InjectableComponent implements OnInit{
  public localVariable = ""

  constructor(public myService: InjectableService,
    protected rootSrvcProvider: RootService){}

  ngOnInit(): void {
   this.localVariable = this.myService.injectableVariable
  }
}
