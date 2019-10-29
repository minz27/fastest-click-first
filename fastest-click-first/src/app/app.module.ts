import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickZeroComponent } from './click-zero/click-zero.component';
import { ClickOneComponent } from './click-one/click-one.component';
import { ClickTwoComponent } from './click-two/click-two.component';
import { ClickThreeComponent } from './click-three/click-three.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ClickZeroComponent,
    ClickOneComponent,
    ClickTwoComponent,
    ClickThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
