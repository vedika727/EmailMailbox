import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCardComponent } from './email-card.component';

describe('EmailCardComponent', () => {
  let component: EmailCardComponent;
  let fixture: ComponentFixture<EmailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailCardComponent]
    });
    fixture = TestBed.createComponent(EmailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
