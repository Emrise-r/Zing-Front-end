import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NghenhieunhatComponent} from "./nghenhieunhat/nghenhieunhat.component";

const routes: Routes = [
  {
    path: '',
    component: NghenhieunhatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
