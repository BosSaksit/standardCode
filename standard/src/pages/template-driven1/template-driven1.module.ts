import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateDriven1Page } from './template-driven1';

@NgModule({
  declarations: [
    TemplateDriven1Page,
  ],
  imports: [
    IonicPageModule.forChild(TemplateDriven1Page),
  ],
})
export class TemplateDriven1PageModule {}
