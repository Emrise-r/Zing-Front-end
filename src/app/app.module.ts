import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgheNhieuNhatComponent } from './nghe-nhieu-nhat/nghe-nhieu-nhat.component';

@NgModule({
  declarations: [
    AppComponent,
    NgheNhieuNhatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
