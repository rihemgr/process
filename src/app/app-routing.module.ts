import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { OffreComponent } from './offre/offre.component';
import { PaymentComponent } from './payment/payment.component';
import { PersonalComponent } from './personal/personal.component';

import { ProcessusComponent } from './processus/processus.component';
import { SeatComponent } from './seat/seat.component';
import { StepsComponent } from './steps/steps.component';
import { UploadComponent } from './upload/upload.component';



const routes: Routes = [{path:"",component:ProcessusComponent},

{path:"steps/personal",component:PersonalComponent},
{path:"steps/payment",component:PaymentComponent},
{path:"steps/seat",component:SeatComponent},
{path:"steps/confirmation",component:ConfirmationComponent},
{path:"steps",component:StepsComponent},
{path:"offre",component:OffreComponent},
{path: "upload" , component: UploadComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
