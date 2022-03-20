import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  
  ticketInformation: any;
    
  constructor(public ticketService: TicketService, private router: Router) { }

  ngOnInit() { 
      this.ticketInformation = this.ticketService.ticketInformation;
  }

  complete() {
      this.ticketService.complete();
  }

  prevPage() {
      this.router.navigate(['steps/payment']);
  }
}

