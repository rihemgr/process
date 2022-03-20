import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  items!: MenuItem[];
    
  subscription!: Subscription;

  constructor(public messageService: MessageService, public ticketService: TicketService) {}

  ngOnInit() {
      this.items = [{
              label: 'Personal',
              routerLink: 'personal'
          },
          {
              label: 'Seat',
              routerLink: 'seat'
          },
          {
              label: 'Payment',
              routerLink: 'payment'
          },
          {
              label: 'Confirmation',
              routerLink: 'confirmation'
          }
      ];

      this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) =>{
          this.messageService.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.'});
      });
  }

  ngOnDestroy() {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }
}
