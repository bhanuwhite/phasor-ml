import { Input,Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-alter-message',
  templateUrl: './alter-message.component.html',
  styleUrls: ['./alter-message.component.scss']
})
export class AlterMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  staticAlertClosed:boolean;

  @Input()
  message:string;

  @Output()
  staticAlertClosedChange = new EventEmitter<boolean>()

  closeAlert(){
    this.staticAlertClosedChange.emit(true);
  }

}
