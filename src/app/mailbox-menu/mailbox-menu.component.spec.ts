import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxMenuComponent } from './mailbox-menu.component';

describe('MailboxMenuComponent', () => {
  let component: MailboxMenuComponent;
  let fixture: ComponentFixture<MailboxMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailboxMenuComponent]
    });
    fixture = TestBed.createComponent(MailboxMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
