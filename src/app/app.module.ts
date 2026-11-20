import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileComponent } from './component/mobile/mobile.component';
import { MoileDashboardComponent } from './component/moile-dashboard/moile-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    MoileDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
