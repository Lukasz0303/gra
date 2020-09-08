import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatCardModule],
  exports: [MatCardModule]
})
export class AppMaterialModule { }