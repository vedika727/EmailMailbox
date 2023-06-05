import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-email-card',
  templateUrl: './email-card.component.html',
  styleUrls: ['./email-card.component.css'],
})
export class EmailCardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.selectedEmail = this.emails[0];
    this.handleEmail(this.selectedEmail, 'emailCard', 'card-content', 0);
  }
  @Input() emails: any;
  @Output() updateSelectedEmailCard = new EventEmitter<any>();

  selectedEmail: any;
  handleEmail = (
    emailObj: any,
    elementId: string,
    activeCardId: string,
    index: Number
  ) => {
    this.selectedEmail = emailObj;
    this.updateSelectedEmailCard.emit(emailObj);
    var ele: any = document.getElementById(elementId + index);
    var top = 0;
    if (ele) {
      var height = ele.offsetHeight - 14;
      while (ele.tagName != 'BODY') {
        top += ele.offsetTop;
        ele = ele.offsetParent;
      }
      top = top + 27;
      var div = document.createElement('div');
      var activeCardIdName = 'active-card' + index;
      div.setAttribute('id', activeCardIdName);
      div.style.position = 'absolute';
      div.style.marginTop = '27px';
      div.style.marginLeft = '20px';
      div.style.width = '480px';
      div.style.height = height.toString() + 'px';
      div.style.background = '#ffffff 0% 0% no-repeat padding-box';
      div.style.boxShadow = '20px 7px 40px #00000014';
      div.style.borderRadius = '20px';
      div.style.zIndex = '-1';
      console.log(activeCardId + index);
      document.getElementById(activeCardId + index)?.prepend(div);
      for (var i = 0; i < this.emails.length; i++) {
        if (index !== i) {
          document.getElementById('active-card' + i)?.remove();
        }
      }
    }
  };
}
