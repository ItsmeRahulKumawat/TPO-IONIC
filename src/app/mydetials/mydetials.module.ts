import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MydetialsPageRoutingModule } from './mydetials-routing.module';

import { MydetialsPage } from './mydetials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MydetialsPageRoutingModule
  ],
  declarations: [MydetialsPage]
})
export class MydetialsPageModule {}
