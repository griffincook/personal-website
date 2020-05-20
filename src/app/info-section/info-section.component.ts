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

}

export class infoObj {
  title: string;
  bullets: string[];
  imageData?: {
    caption: string;
    images: string[];
  };
}
