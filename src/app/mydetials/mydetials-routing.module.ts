import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MydetialsPage } from './mydetials.page';

const routes: Routes = [
  {
    path: '',
    component: MydetialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MydetialsPageRoutingModule {}
