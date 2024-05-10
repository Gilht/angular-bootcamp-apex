import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomTransformPipe } from '../../pipes/custom-transform.pipe';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [CommonModule, CustomTransformPipe],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent {

  protected mexicanPesos: number = 102.33

  protected hellowWorld: string = "hola mundo"
}
