import {Injectable} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {MessageModalComponent} from './message-modal/message-modal.component';
import {ConfirmModalComponent} from './confirm-modal/confirm-modal.component';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal: BsModalService) {
  }

  showMessage(title, text) {
    const modalRef: BsModalRef = this.modal.show(MessageModalComponent, {class: 'modal-dialog-centered'});
    modalRef.content.text = text;
    modalRef.content.title = title;
    modalRef.content.activeModal = modalRef;
  }

  showConfirm(text) {
    const modalRef: BsModalRef = this.modal.show(ConfirmModalComponent, {class: 'modal-dialog-centered'});
    modalRef.content.text = text;
    modalRef.content.activeModal = modalRef;
    modalRef.content.confirm = new Subject();
    return modalRef;
  }
}
