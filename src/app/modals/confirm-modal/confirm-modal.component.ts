import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  public text: string;
  public confirm: Subject<any>;
  activeModal: BsModalRef;

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    this.activeModal.hide();
  }

  sendMessage(confirm) {
    this.confirm.next(confirm);
    this.close();
  }
}
