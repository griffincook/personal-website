import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Title} from "@angular/platform-browser";
import {infoObj} from "./info-section/info-section.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  scrollLock = "noScroll";
  selectedTab = 0;
  pictureClass = "indexHeadshot";
  headshotTransparency = "transparent";
  pictureSrc = "assets/images/headshot_scaled_down.png";
  titlesTransparency = "transparent";
  aboutTransparency = "transparent";
  projectTransparency = "transparent";
  workTransparency = "transparent";
  aboutInfo: infoObj[];
  projectsInfo: infoObj[];
  workInfo: infoObj[];

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Griffin Cook');
  }

  ngOnInit(): void {
    this.navBarCtrl();
    this.setInfoText();
    $(window).on('beforeunload', function() {
      $('body').hide();
      $(window).scrollTop(0);
    });
    this.fade();
  }

  fade(): void {
    setTimeout(() => {
      this.headshotTransparency = "opaque";
    }, 1200);
    setTimeout(() => {
      this.titlesTransparency = "opaque";
    }, 2000);
    setTimeout(() => {
      this.aboutTransparency = "opaque";
    }, 2800);
    setTimeout(() => {
      this.projectTransparency = "opaque";
    }, 3300);
    setTimeout(() => {
      this.workTransparency = "opaque";
      this.scrollLock = "";
    }, 3900);
  }

  selectTab(index: number) {
    this.selectedTab = index;
  }

  navBarCtrl() {
    document.addEventListener("scroll", this.manageScrollBar);
  };

  manageScrollBar() {
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 1.15;
    if ($(document).scrollTop() >= h) {
      $('.sectionHeader').addClass('fixed');
    } else {
      $('.sectionHeader').removeClass('fixed');
    }
  }

  setInfoText() {
    this.aboutInfo = [
      {
        title: 'I\'m...',
        bullets: [
          'A student at the University of Waterloo currently working towards my Bachelor of Engineering in Systems Design Engineering.',
          'Passionate about creativity, design, and building things.',
          'Always looking for new experiences to learn relevant, and applicable skills.',
          'Athletic and especially enjoy playing sports. I have played on many intramural teams at UW including hockey, soccer, indoor volleyball, beach volleyball, flag football and ultimate frisbee.',
          'An adventurous person and think that there is nowhere better to be than by the water.',
          'A self-taught guitar player. I often attempt to play new songs after discovering new tunes.',
          'Obsessed with listening to music and always trying to explore new genres, but my go to genres are rock, folk, and indie.',
        ],
        imageData: {
          caption: 'Some snapshots of my life',
          images: [
            'assets/images/me_trunk.jpg',
            'assets/images/group_hike.jpg',
            'assets/images/class.jpeg'
          ],
          selected: 0,
          horiz: false
        }
      }
    ];
    this.projectsInfo = [
      {
        title: 'Shottle',
        bullets: [
          'A bottle that is meant to reduce alcohol consumption and increase water intake when drinking at social events.',
          'The bottle has two compartments, one for alcohol and one for water.',
          'The lid has to be held on the alcohol compartment or else a spring will force the opening to spin back to the water compartment.',
          'Our design team started off with defining our problem space, creating personas, and brainstorming ideas.',
          'Once we had our bottle idea, we followed an iterative design process by first creating a low-fidelity prototype then conducted user testing.',
          'Adjustments were made and this process was replicated for a medium-fidelity prototype.',
          'The high fidelity prototype was then designed in Solidworks by myself and another team member, and printed using a 3D printer.',
          'Final user testing was finally conducted.'
        ],
        imageData: {
          caption: 'Components of the High Fidelity Prototype Including the Bottle and a Two-Piece Lid',
          images: [
            'assets/images/shottle1.jpg',
            'assets/images/shottle2.jpg',
            'assets/images/shottle3.jpg'
          ],
          selected: 0,
          horiz: false
        }
      },
      {
        title: 'Guitar Hero',
        bullets: [
          'Recreation of Guitar Hero using two breadboards and an Arduino Uno.',
          'One breadboard/circuit has 4 sets of 4 different coloured LEDs.',
          'A signal is sent from the Arduino to the first set of LEDs, causing them to light up. That signal is then stored in a register.',
          'When the next signal comes in from the Arduino, the second set of LEDs illuminate with the first signal pattern\n' +
          '              and the first set of LEDs illuminates with the new signal pattern. This progression of signals continues until the game ends.',
          'The bottom set of LEDs is the set of lights that the player has to match.',
          'The other circuit has 4 buttons, each matching a correspondingly coloured LED. The player has\n' +
          '              to press the correct combination of buttons to match the fourth set of LEDs, or the ones closest to the player.',
          'The button combination is input into the Arduino, where an interrupt checks whether it corresponds\n' +
          '              to the signal. The combination of notes is audibly played if the input is correct, and an ugly noise is played\n' +
          '              if the input is incorrect.',
          'The streak of correct notes in a row is displayed in a console window, and the high score is\n' +
          '              kept track of and updated.'
        ],
        imageData: {
          caption: 'Circuit that Displays Which Notes Need to be Played',
          images: [
            'assets/images/guitar_hero_notes.jpg'
          ],
          selected: 0,
          horiz: false
        }
      },
      {
        title: 'Hibernation',
        bullets: [
          'A text-based adventure game created with PHP, HTML, CSS, and a MySQL database.',
          'I wrote the narrative, created a story board, designed the game flow, and wrote the code.',
          'Inspired by the classic adventure game Zork.',
          'The player wakes up in their bedroom on a moon base feeling disoriented. They must figure out\n' +
          '              what is going on by exploring the base, collecting items, and interacting with objects,\n' +
          '              all while staying safe.'
        ],
        imageData: {
          caption: 'Start of the Game',
          images: [
            'assets/images/first_room_screenshot.PNG'
          ],
          selected: 0,
          horiz: true
        }
      },
      {
        title: 'You Can\'t Hide',
        bullets: [
          'A 3D Unity Horror Game inspired by Slenderman.',
          'I created the game flow, designed the atmosphere, wrote the story, and developed scripts in C#.',
          'The player must run around in the woods collecting red cubes and fighting off evil mushrooms.',
          'Every once in a while a larger monster will find the player and they must run for their life.',
          'Collect all 10 cubes and take them to the one friendly mushroom at the mountain to move on to the boss battle.',
          'In the boss battle, the player must collect shots by attacking the mushrooms and shoot them at the monster, which is now the size of a skyscraper.',
        ],
        imageData: {
          caption: 'Opening Scene with Instructions for the Player',
          images: [
            'assets/images/you_cant_hide.PNG'
          ],
          selected: 0,
          horiz: true
        }
      },
      {
        title: 'Blogh',
        bullets: [
          'A PHP blog platform with a MySQL database.',
          'Users can create an account and are given basic access. There are also Author accounts and Admin\n' +
          '              accounts, which have access to more pages.'
        ],
        imageData: {
          caption: 'Various pages throughout the platform',
          images: [
            'assets/images/home_capture.PNG',
            'assets/images/author_capture.PNG',
            'assets/images/admin_capture.PNG',
          ],
          selected: 0,
          horiz: true
        }
      }
    ];
    this.workInfo = [
      {
        title: 'Web Application Developer, <a href="https://www.inflightintegration.com/" target="_blank">InFlight</a> [Jan - April, 2020] ',
        bullets: [
          'Modernized outdated employee engagement platforms by extracting their data with JQuery and re-presenting the same data in a completely new UI built using Angular, HTML and SCSS.',
          'Actively sought out bugs and improvements, created my own tickets, and wrote efficient test-driven solutions.',
          'Recognized by my supervisor for having strong communication skills both in the office and when working from home.'
        ]
      },
      {
        title: 'Backend Software Developer, <a href="https://xe.com" target="_blank">XE.com Inc.</a> [May - August, 2019] ',
        bullets: [
          'Collaborated with a small team dedicated to developing chatbots on Google Dialogflow and Amazon Alexa with Node.js.',
          'Prototyped new capabilities for the chatbots, analyzed their alignment with the company\'s goals, and pitched them to the head of engineering.',
          'Introduced DevOps practices to repositories using Terraform for AWS, and Gitlab CI/CD, which reduced the stress of deployments for IT.'
        ],
        imageData: {
          caption: 'Last day with the other co-ops',
          images: [
            'assets/images/xe.jpg',
          ],
          selected: 0,
          horiz: false
        }
      },
      {
        title: 'Frontend Full Stack Developer, <a href="https://ssimwave.com" target="_blank">SSIMWAVE</a> [Sept - December, 2018]',
        bullets: [
          'Implemented new features and designs for a video analytics web application using AngularJS, HTML and CSS.',
          'Worked directly with a designer and other developers to optimize the user experience of the UI. Contributed design and implementation recommendations during planning meetings.',
          'Introduced integration and unit tests with Mocha and Chai.'
        ]
      },
      {
        title: 'Systems Software Developer, <a href="https://xe.com" target="_blank">XE.com Inc.</a> [January - April, 2018]',
        bullets: [
          'Added features to a Shopify pricing application using React during the project\'s infantile stages.',
          'Created a Javascript application to increase the efficiency of finding bugs.',
          'Worked solely with new languages, libraries, and frameworks learned on the job, while managing to meet deadlines with constantly changing projects from sprint to sprint.'
        ]
      }
    ];
  }
}
