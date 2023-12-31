import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { CalculateTypesComponent } from './components/calculate-types/calculate-types.component';
import { CalculateImmobileComponent } from './components/calculate-immobile/calculate-immobile.component';
import { CalculateVehicleComponent } from './components/calculate-vehicle/calculate-vehicle.component';
import { CalculateSmartphoneComponent } from './components/calculate-smartphone/calculate-smartphone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyDirective } from "ngx-currency";
import { CalculateFormCardComponent } from './components/calculate-form-card/calculate-form-card.component';


@NgModule({
  declarations: [
    SiteComponent,
    HomeComponent,
    CalculateTypesComponent,
    CalculateImmobileComponent,
    CalculateVehicleComponent,
    CalculateSmartphoneComponent,
    CalculateFormCardComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyDirective
  ]
})
export class SiteModule { }
