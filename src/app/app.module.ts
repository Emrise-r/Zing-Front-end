import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NghenhieunhatComponent} from './nghenhieunhat/nghenhieunhat.component';

import {HttpClientModule} from "@angular/common/http";
import {Likenhieunhat10baiComponent} from './likenhieunhat10bai/likenhieunhat10bai.component';
import {BaimoitaoComponent} from './baimoitao/baimoitao.component';
import { Baimoitao30Component } from './baimoitao30/baimoitao30.component';
import { HomeComponent } from './home/home.component';
import { Top30Component } from './top30/top30.component';
import { TopLikeComponent } from './top-like/top-like.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { CreateSongComponent } from './create-song/create-song.component';


@NgModule({
  declarations: [
    AppComponent,
    NghenhieunhatComponent,
    Likenhieunhat10baiComponent,
    BaimoitaoComponent,
    Baimoitao30Component,
    HomeComponent,
    Top30Component,
    TopLikeComponent,
    CreateSongComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
