import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-revealstory',
  templateUrl: './revealstory.component.html',
  styleUrls: ['./revealstory.component.scss']
})
export class RevealstoryComponent implements OnInit {
  matchObj: object = {}

  constructor(private modalService: NgbModal) {
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

}
