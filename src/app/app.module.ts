import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailboxMenuComponent } from './mailbox-menu/mailbox-menu.component';
import { MailboxEmailDetailsComponent } from './mailbox-email-details/mailbox-email-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MailboxMenuComponent,
    MailboxEmailDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
