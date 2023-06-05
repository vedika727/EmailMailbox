import { Component } from '@angular/core';
// import EmailsData from '../assets/json/email-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'email-mailbox';
  emails = [
    {
      senderProfilePic: '/assets/imgs/Mailbox/Image 5.png',
      senderName: 'Sam Miller',
      senderEmail: 'sammiller@gmail.com',
      sentWhen: 'Today',
      timestamp: '08:45 PM',
      subject: 'Portfolio',
      message:
        'Stop wasting time looking for files buried in folders. Visually organize all your assets in one place',
      attachments: [
        '/assets/imgs/Mailbox/pexels-photo-2977302.png',
        '/assets/imgs/Mailbox/pexels-photo-2533686.png',
        '/assets/imgs/Mailbox/pexels-photo-2694453.png',
        '/assets/imgs/Mailbox/pexels-photo-2923672.png',
      ],
    },
    {
      senderProfilePic: '/assets/imgs/Mailbox/NoPath - Copy (6).png',
      senderName: 'Lily Jones',
      senderEmail: 'lilyjones@gmail.com',
      sentWhen: 'Yesterday',
      timestamp: '01:11 PM',
      subject: 'Invitations',
      message:
        'Its always a pleasure to have you all at my birthday parties. So, please dont be late for this one.',
      attachments: [],
    },
    {
      senderProfilePic: '/assets/imgs/Mailbox/NoPath - Copy (5).png',
      senderName: 'Smith',
      senderEmail: 'smith@gmail.com',
      sentWhen: 'Monday',
      timestamp: '06:45 PM',
      subject: 'Assingment Submission',
      message:
        'If you want to set up an assignment with additional reviews, you can enable Moderated Grading...',
      attachments: [],
    },
    {
      senderProfilePic:
        '/assets/imgs/Mailbox/joseph-gonzalez-iFgRcqHznqg-unsplash.png',
      senderName: 'Patrick',
      senderEmail: 'patrick@gmail.com',
      sentWhen: 'Monday',
      timestamp: '05:15 PM',
      subject: 'Interview Scheduled',
      message:
        'Hi Mike, thanks for applying for UI/UX Designer. We are reviewing resumes and will follow up in the...',
      attachments: [],
    },
    {
      senderProfilePic:
        '/assets/imgs/Mailbox/joseph-gonzalez-iFgRcqHznqg-unsplash.png',
      senderName: 'Patrick',
      senderEmail: 'patrick@gmail.com',
      sentWhen: 'Monday',
      timestamp: '05:15 PM',
      subject: 'Interview Scheduled',
      message:
        'Hi Mike, thanks for applying for UI/UX Designer. We are reviewing resumes and will follow up in the...',
      attachments: [],
    },
  ];
  selectedEmail: any = this.emails[0];
  getSelectedEmailCard(selectedCard: any) {
    console.log('getSelectedEmailCard');
    console.log(selectedCard);
    this.selectedEmail = selectedCard;
  }
}
