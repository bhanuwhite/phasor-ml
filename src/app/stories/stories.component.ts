import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  // gardenStory: string[] = []
  // showGardenStory: string[] = []
  // i: number = 1;
  // str: string = '';
  matchObj: object = {}

  constructor(private cdr: ChangeDetectorRef, private modalService: NgbModal, private router: Router) {
    let Match = JSON.parse(localStorage.getItem('Match'));
    Match.map((data) => {
      this.matchObj[Object.keys(data)[0]] = data[Object.keys(data)[0]]
    })

    // this.gardenStory = [
    //   `Last week, our teacher told the class about an exciting new project. We get to build our own community garden! Mari asked around to see what her friends planned to bring. She wrote down notes on a ${obj['Noun1']}.`,
    //   `Sofia wants to plant ${obj['Prural Noun']}.`,
    //   `John is going to bring a ${obj['Noun2']} from his pet ${obj['Animal']}.`,
    //   `Finally, Mari decided she will plant ${obj['Adjective']} flowers.`
    // ]

  }

  ngOnInit(): void {
    // this.nextFunction();
  }

  // nextFunction() {
    // let storyPart = this.gardenStory[this.i]
    // if (storyPart != undefined) {
    //   this.str = this.str + storyPart
    //   this.showGardenStory = [this.str]
    // }
    // this.cdr.detectChanges()
    // this.i++
    // console.log(this.showGardenStory)

  //   if (this.i == 1) {
  //     document.getElementById(`storyPhase${this.i}`).style.display = 'contents'
  //   }
  //   else if (this.i == 2) {
  //     document.getElementById(`storyPhase${this.i}`).style.display = 'contents'
  //   }
  //   else if (this.i == 3) {
  //     document.getElementById(`storyPhase${this.i}`).style.display = 'contents'
  //   }
  //   else if (this.i == 4) {
  //     document.getElementById(`storyPhase${this.i}`).style.display = 'contents'
  //   }
  //   this.i++
  // }

  open(content) {
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
    }, (reason) => {
    });
  }

  revealFunction() {
    this.router.navigate(['madlibs/stories/reveal']);
  }

}
