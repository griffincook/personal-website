import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html'
})
export class InfoSectionComponent implements OnInit {
  @Input() infoObjs: infoObj[];
  constructor() { }

  ngOnInit(): void {
  }

  plusSlides(info: infoObj, n: number): void {
    let nextTab = info.imageData.selected + n;
    if (nextTab < 0) {
      nextTab = info.imageData.images.length - 1;
    } else if (nextTab + 1 > info.imageData.images.length) {
      nextTab = 0;
    }
    info.imageData.selected = nextTab;
  }

  currentSlide(info: infoObj, n: number): void {
    info.imageData.selected = n;
  }

}

export class infoObj {
  title: string;
  bullets: string[];
  imageData?: {
    caption: string;
    images: string[];
    selected: number;
    horiz: boolean;
  };
}
