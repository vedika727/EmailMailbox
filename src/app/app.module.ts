import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailboxMenuComponent } from './mailbox-menu/mailbox-menu.component';
import { MailboxEmailDetailsComponent } from './mailbox-email-details/mailbox-email-details.component';
import { EmailCardModule } from 'email-card';

@NgModule({
  declarations: [
    AppComponent,
    MailboxMenuComponent,
    MailboxEmailDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, EmailCardModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
