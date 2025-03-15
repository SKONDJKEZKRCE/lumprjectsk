import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-invoices',
  templateUrl: './recent-invoices.component.html',
  styleUrls: ['./recent-invoices.component.css']
})
export class RecentInvoicesComponent {
  invoices = [
    { serial: '#DF429', date: new Date('2023-01-15'), user: 'John Doe', amount: 450, status: 'Paid' },
    { serial: '#HTY274', date: new Date('2023-02-02'), user: 'Jane Smith', amount: 890, status: 'Pending' },
    { serial: '#LKE600', date: new Date('2023-03-10'), user: 'Bob Johnson', amount: 1200, status: 'Cancelled' },
    { serial: '#HRP447', date: new Date('2023-04-22'), user: 'Alice Brown', amount: 345, status: 'Paid' }
  ];
}