import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appExercise2]'
})
export class Exercise2Directive {

  constructor(el_2:ElementRef) {
  el_2.nativeElement.style.color='Red';
  el_2.nativeElement.style.font='italic bold 40px sans,serif';
  }

}
