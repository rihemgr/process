import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  personalInformation: any;
  subscription!: Subscription;
  submitted: boolean = false;
  

  constructor(public ticketService: TicketService, public messageService: MessageService,private router: Router) { }

  ngOnInit() { 
      this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
    
}


  nextPage() {
      if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
          this.ticketService.ticketInformation.personalInformation = this.personalInformation;
          this.router.navigate(['steps/seat']);

          return;
      }

      this.submitted = true;
  }

  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
}

}
