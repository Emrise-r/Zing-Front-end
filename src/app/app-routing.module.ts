import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaimoitaoComponent} from "./baimoitao/baimoitao.component";
import {NghenhieunhatComponent} from "./nghenhieunhat/nghenhieunhat.component";
import {Likenhieunhat10baiComponent} from "./likenhieunhat10bai/likenhieunhat10bai.component";

const routes: Routes = [
  {
    path: '',
    component: BaimoitaoComponent
  },
  {
    path: '',
    component: NghenhieunhatComponent
  },
  {
    path: '',
    component: Likenhieunhat10baiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
