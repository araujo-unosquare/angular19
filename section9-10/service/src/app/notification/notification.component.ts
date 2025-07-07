import { Component, inject, OnInit } from '@angular/core';
import { NotificationService } from '../dependencies/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  providers: [NotificationService],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent implements OnInit {
  private notificationService = inject(NotificationService);
  notifications: string[] = [];
  private msgCount = 1;

  ngOnInit(): void {
    this.loadNotifications();
  }
  loadNotifications() {
    this.notifications = this.notificationService.getNotifications();
  }
  addNotification() {
    const msg = `New Notification ${this.msgCount}`;
    this.notificationService.addNotification(msg);
    this.loadNotifications();
    this.msgCount++;
  }
  clearNotifications() {
    this.notificationService.clearNotification();
    this.loadNotifications();
    this.msgCount = 1;
  }
}
