import { NgModule } from '@angular/core';
import { NgProgressModule } from 'ngx-progressbar';
import { BrowserModule } from '@angular/platform-browser';
import {CheckboxModule} from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import {MatStepperModule} from '@angular/material/stepper';
import{NgxCaptchaModule} from 'ngx-captcha';
import { environment } from '../environments/environment';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessusComponent } from './processus/processus.component';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuItem, NbCardModule, NbMenuModule, NbIconModule, NbSpinnerModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {CarouselModule} from 'primeng/carousel';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MessageService } from 'primeng/api';

import {StepsModule} from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api'
import {MegaMenuItem} from 'primeng/api';

import { MatRadioModule } from '@angular/material/radio';

import { ToastModule} from 'primeng/toast';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalComponent } from './personal/personal.component';
import { SeatComponent } from './seat/seat.component';

import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { StepsComponent } from './steps/steps.component';
import { OffreComponent } from './offre/offre.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UploadComponent } from './upload/upload.component';






@NgModule({
  declarations: [
    AppComponent,
    ProcessusComponent,
    PersonalComponent,
    SeatComponent,
    
  
    ConfirmationComponent,
    PaymentComponent,
    StepsComponent,
    OffreComponent,
    UploadComponent,
  
    
    
  
    
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    ButtonModule,
    CardModule,
    NbCardModule,
    TableModule,
    CheckboxModule,
    DropdownModule,
    MenuModule,
    NbIconModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    DragDropModule,
    NgxCaptchaModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    NgProgressModule,
    NbSpinnerModule,
    MessageService ,
    

    
    
  
    
    
    
    
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    CarouselModule,
    StepsModule,
    ToastModule,
    
  
    
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.recaptcha.siteKey,
    } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
