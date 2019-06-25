import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  listener = new Subject<string>();

  sendMessage(message: string) {
    this.listener.next(message);
  }
}
