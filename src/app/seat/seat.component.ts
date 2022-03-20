import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  constructor(public ticketService: TicketService, private router: Router) { }
  
  classes!: any[];

  vagons!: any[];
  
  seats!: any[];

  seatInformation: any;

  ngOnInit() { 
      this.seatInformation = this.ticketService.ticketInformation.seatInformation;

      this.classes = [
          {name: 'First Class', code: 'A', factor: 1},
          {name: 'Second Class', code: 'B', factor: 2},
          {name: 'Third Class', code: 'C', factor: 3}
      ];    
  }

  setVagons(event:any) {
      if (this.seatInformation.class && event.value) {
          this.vagons = [];
          this.seats = [];
          for (let i = 1; i < 3 * event.value.factor; i++) {
              this.vagons.push({wagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
          }
      }
  }
  
  setSeats(event:any) {
      if (this.seatInformation.wagon && event.value) {
          this.seats = [];
          for (let i = 1; i < 10 * event.value.factor; i++) {
              this.seats.push({seat: i, type: event.value.type});
          }
      }
  }

  nextPage() {
      if (this.seatInformation.class && this.seatInformation.seat && this.seatInformation.wagon) {
          this.ticketService.ticketInformation.seatInformation = this.seatInformation;
          this.router.navigate(['steps/payment']);
      }
  }

  prevPage() {
      this.router.navigate(['steps/personal']);
  }
}