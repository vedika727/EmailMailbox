import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-email-card',
  templateUrl: './email-card.component.html',
  styles: ['./email-card.component.scss'],
})
export class EmailCardComponent implements OnInit {
  ngOnInit(): void {
    this.selectedEmail = this.emails[0];
  }
  @Input() emails: any;
  selectedEmail: any;
  handleEmail = (
    emailObj: any,
    elementId: string,
    activeCardId: string,
    index: Number
  ) => {
    this.selectedEmail = emailObj;
    var ele: any = document.getElementById(elementId + index);
    var top = 0;
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
  };
}
