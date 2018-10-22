import { Directive, ElementRef, Input } from '@angular/core';
/**
 * A directive which allows me to style the color of
 * numbers based on their value (0-100) numbers.
 *
 * @export
 * @class ColorGradingDirective
 */
@Directive({
  selector: '[appColorGrading]'
})


export class ColorGradingDirective {

  @Input('appColorGrading') gradeValue: Number;

  constructor(private element: ElementRef) {

  }
  ngOnInit() {
    this.colorGrade(this.gradeValue);
  }

  /**
   * Determine what color to use based on a switch 
   * statement.
   * @param value 
   */
  colorGrade(value: Number) {
    switch (true) {
      case (value >= 90):
        this.element.nativeElement.style.color = "#1ada89";
        break;
      case (value >= 80):
        this.element.nativeElement.style.color = "#46cc66";
        break;
      case (value >= 70):
        this.element.nativeElement.style.color = "#56c75a";
        break;
      case (value >= 60):
        this.element.nativeElement.style.color = "#74be43";
        break;
      case (value >= 50):
        this.element.nativeElement.style.color = "#91a818";
        break;
      case (value >= 40):
        this.element.nativeElement.style.color = "#91a818";
        break;
      case (value >= 30):
        this.element.nativeElement.style.color = "#a29800";
        break;
      case (value >= 20):
        this.element.nativeElement.style.color = "#b37e00";
        break;
      case (value >= 10):
        this.element.nativeElement.style.color = "#c06009";
        break;
      case (value >= 0):
        this.element.nativeElement.style.color = "#c84318";
        break;
    }
  }

}
