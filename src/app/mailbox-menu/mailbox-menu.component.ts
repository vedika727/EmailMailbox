import { Component } from '@angular/core';

@Component({
  selector: 'app-mailbox-menu',
  templateUrl: './mailbox-menu.component.html',
  styleUrls: ['./mailbox-menu.component.scss'],
})
export class MailboxMenuComponent {
  menuItems = [
    {
      label: 'Inbox',
      icon: '/assets/imgs/Mailbox/noun_contact_2984932.svg',
      unreadCount: 20,
    },
    {
      label: 'Flagged',
      icon: '/assets/imgs/Mailbox/noun_Star_2986785.svg',
      unreadCount: 0,
    },
    {
      label: 'Draft',
      icon: '/assets/imgs/Mailbox/noun_Box_2466558.svg',
      unreadCount: 0,
    },
    {
      label: 'Sent',
      icon: '/assets/imgs/Mailbox/noun_sent_61680.svg',
      unreadCount: 0,
    },
    {
      label: 'Trash',
      icon: '/assets/imgs/Mailbox/noun_Trash_1526083.svg',
      unreadCount: 0,
    },
    {
      label: 'More',
      icon: '/assets/imgs/Mailbox/menu.png',
      unreadCount: 0,
    },
  ];
  folders = [
    {
      label: 'Office',
      icon: '/assets/imgs/Mailbox/noun_Folder_1558235-2.svg',
    },
    {
      label: 'Personal',
      icon: '/assets/imgs/Mailbox/noun_Folder_1558235.svg',
    },
    {
      label: 'Freelance',
      icon: '/assets/imgs/Mailbox/noun_Folder_1558235-1.svg',
    },
  ];
  selectedMenuItem = 'inbox';
  onMenuClick = (value: string) => {
    console.log(value);
    this.selectedMenuItem = value;
  };
}
