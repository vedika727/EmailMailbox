import { NgModule } from '@angular/core';
import { EmailCardComponent } from './email-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EmailCardComponent],
  imports: [BrowserModule, CommonModule],
  exports: [EmailCardComponent],
})
export class EmailCardModule {}
