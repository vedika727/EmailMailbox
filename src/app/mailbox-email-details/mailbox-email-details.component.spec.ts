import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxEmailDetailsComponent } from './mailbox-email-details.component';

describe('MailboxEmailDetailsComponent', () => {
  let component: MailboxEmailDetailsComponent;
  let fixture: ComponentFixture<MailboxEmailDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailboxEmailDetailsComponent]
    });
    fixture = TestBed.createComponent(MailboxEmailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
