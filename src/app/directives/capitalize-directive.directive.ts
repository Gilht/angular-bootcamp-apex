import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[capitalize]',
  standalone: true
})
export class CapitalizeDirective implements OnInit{

  constructor(public ele: ElementRef)  {}

   ngOnInit(): void {
     this.ele.nativeElement.style.textTransform = 'Capitalize';
   }

   protected capitalizeString() {
    let text: string = this.ele.nativeElement.innerText;

    if(text) {
      const textGroup: string[] = text.split(' ');

      const countWords: number = textGroup.length;

      let capitalized: string = "";

      textGroup.forEach((word: string, id: number) => {
        capitalized += word.charAt(0).toUpperCase() + word.slice(1);
        if(id + 1 < countWords) {
          capitalized += '';
        }
      });

      this.ele.nativeElement.innerText = capitalized;
    }
   }
}
