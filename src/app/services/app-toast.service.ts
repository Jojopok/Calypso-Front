import { Injectable } from '@angular/core';

export interface ToastInfo {
  header: string;
  body: string;
  classname?: string;
  delay?: number;
}

@Injectable({ providedIn: 'root' })
export class AppToastService {
  toasts: ToastInfo[] = [];

  showSuccess(header: string, body: string) {
    this.toasts.push({ header, body, classname: 'bg-success text-light', delay: 5000 });
  }

  showDanger(header: string, body: string) {
    this.toasts.push({ header, body, classname: 'bg-danger text-light', delay: 5000 });
  }
}
