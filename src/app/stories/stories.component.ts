import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  matchObj: object = {}

  constructor(private cdr: ChangeDetectorRef, private modalService: NgbModal, private router: Router) {
    let Match = JSON.parse(localStorage.getItem('Match'));
    Match.map((data) => {
      this.matchObj[Object.keys(data)[0]] = data[Object.keys(data)[0]]
    })
  }

  ngOnInit(): void {

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
