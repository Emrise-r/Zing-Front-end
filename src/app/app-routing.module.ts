import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {Baimoitao30Component} from "./baimoitao30/baimoitao30.component";
import {Top30Component} from "./top30/top30.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'newSong30',
    component: Baimoitao30Component
  },
  {
    path: 'top30',
    component: Top30Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
