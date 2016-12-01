import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProgressBarComponent } from './components/progress-bar.comp';

@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  providers: [],
  exports: [
    ProgressBarComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MyModule {}
