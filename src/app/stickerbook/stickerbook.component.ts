import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stickerbook',
  templateUrl: './stickerbook.component.html',
  styleUrls: ['./stickerbook.component.scss']
})
export class StickerbookComponent implements OnInit {

  @ViewChild('content') content;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.open(this.content);
  }

  open(content) {
    localStorage.removeItem('popupClose')
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
    }, (reason) => {
      localStorage.setItem('popupClose', JSON.stringify(true))
    });
  }

}
