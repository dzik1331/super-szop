import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {

  public text;
  public title;
  activeModal: BsModalRef;

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    this.activeModal.hide();
  }

}
