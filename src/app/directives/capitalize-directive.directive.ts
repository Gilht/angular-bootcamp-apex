import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[capitalize]',
  standalone: true
})
export class CapitalizeDirectiveDirective implements OnInit{

  constructor(public ele: ElementRef)  {}

   ngOnInit(): void {
     this.ele.nativeElement.style.textTransform = 'Capitalize';
   }

}
