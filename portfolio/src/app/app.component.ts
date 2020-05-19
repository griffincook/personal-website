import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  scrollLock = "noScroll";
  displayAboutMe = false;
  displayProjects = false;
  displayWork = false;
  pictureClass = "indexHeadshot";
  headshotTransparency = "transparent";
  pictureSrc = "../assets/images/headshot_scaled_down.png";
  titlesTransparency = "transparent";
  aboutTransparency = "transparent";
  projectTransparency = "transparent";
  workTransparency = "transparent";
  bannerClass = '';

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Griffin Cook');
  }

  ngOnInit(): void {
    this.navBarCtrl();
    $(window).on('beforeunload', function() {
      $('body').hide();
      $(window).scrollTop(0);
    });
    this.fade();
  }

  fade(): void {
    console.log('called fade');

    setTimeout(() => {
      this.headshotTransparency = "opaque";
      setTimeout(() => {
        this.pictureClass = "spin";
        setTimeout(() => {
          this.pictureClass = "indexHeadshot";
          this.pictureSrc = "../assets/images/headshot_scaled_down_flipped.png";
          setTimeout(() => {
            this.pictureClass = "spin";
            setTimeout(() => {
              this.pictureClass = "indexHeadshot";
              this.pictureSrc = "../assets/images/headshot_scaled_down.png";
            }, 500);
          }, 500);
        }, 500);
      }, 800);
    }, 800);

    setTimeout(() => {
      this.titlesTransparency = "opaque";
    }, 1600);
    setTimeout(() => {
      this.aboutTransparency = "opaque";
    }, 2400);
    setTimeout(() => {
      this.projectTransparency = "opaque";
    }, 2900);
    setTimeout(() => {
      this.workTransparency = "opaque";
      this.scrollLock = "";
    }, 3400);
  }

  toggleAboutMe() {
    this.displayAboutMe = !this.displayAboutMe;
  };

  toggleProjects() {
    this.displayProjects = !this.displayProjects;
  };

  toggleWork() {
    this.displayWork = !this.displayWork;
  };

  navBarCtrl() {
    document.addEventListener("scroll", this.manageScrollBar);
  };

  manageScrollBar() {
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) /6;
    if ($(document).scrollTop() >= h) {
      $('.banner').addClass('fixed');
    } else {
      $('.banner').removeClass('fixed');
    }
  }
}
