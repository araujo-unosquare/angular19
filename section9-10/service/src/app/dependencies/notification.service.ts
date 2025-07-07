import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications: string[] = [];

  addNotification(msg: string) {
    this.notifications.push(msg);
  }
  getNotifications(): string[] {
    return this.notifications;
  }
  clearNotification() {
    this.notifications = [];
  }
}
