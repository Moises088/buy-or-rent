import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { CalculateTypesComponent } from './components/calculate-types/calculate-types.component';


@NgModule({
  declarations: [
    SiteComponent,
    HomeComponent,
    CalculateTypesComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    CoreModule
  ]
})
export class SiteModule { }
