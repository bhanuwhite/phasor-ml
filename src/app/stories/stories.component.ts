import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  // @ViewChild('story1') story1: ElementRef=;
  story1: string;
  someHtmlCode: any = '';
  matchObj: object = {}
  i: number = 0;
  speed: number = 100;

  constructor(private cdr: ChangeDetectorRef, private modalService: NgbModal, private router: Router) {
    let Match = JSON.parse(localStorage.getItem('Match'));
    Match.map((data) => {
      this.matchObj[Object.keys(data)[0]] = data[Object.keys(data)[0]]
    })
    this.story1 = `Last week, our teacher told the class about an exciting new project. We get to build our own community garden! Mari asked around to see what her friends planned to bring. She wrote down notes on a <b>${this.matchObj['Noun1']}</b>. Sofia wants to plant <b>${this.matchObj['Prural Noun']}</b>. John is going to bring a <b>${this.matchObj['Noun2']}</b> from his pet <b>${this.matchObj['Animal']}</b>. Finally, Mari decided she will plant <b>${this.matchObj['Adjective']}</b> flowers.`
  }

  ngOnInit(): void {
    const myInterval = setInterval(() => { this.getStory() }, this.speed);
  }

  getStory() {
    try {
      if (this.i < this.story1.length) {
        this.someHtmlCode += this.story1.charAt(this.i);
        this.i++;
        this.cdr.detectChanges();
      }
    } catch (e) { }
  }

  open(content) {
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
    }, (reason) => {
    });
  }

  revealFunction() {
    this.router.navigate(['madlibs/stories/reveal']);
  }

}
