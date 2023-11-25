import { Component } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';


@Component({
  selector: 'portal-satisfaction',
  templateUrl: './satisfaction.component.html',
  styleUrls: ['./satisfaction.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class SatisfactionComponent {
  visible: boolean = false;
  textValue = '';

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  showDialog() {
    this.visible = true;
    
  }
  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "Quieres dejarnos tu comentario?",
      acceptLabel: "Comentar",
      rejectLabel: "No",
      accept: () => {
        this.showDialog();
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Sin comentario', detail: 'Gracias por tu voto' });
      }
    }
    );

  }
  saveComment(){
    this.messageService.add({ severity: 'info', summary: 'Con comentario', detail: 'Gracias por tu comentario' });
    this.textValue = "";
    this.visible = false;

  }

}
