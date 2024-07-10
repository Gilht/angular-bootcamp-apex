import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent {

  protected mexicanPesos: number = 1023432

  protected hellowWorld: string = "hola mundo"
}
