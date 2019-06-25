import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status } from '../interfaces/status.interface';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  status: Status[] = [
    { name: 'working' },
    { name: 'on vacation' },
    { name: 'remotee' },
    { name: 'superhero' }
  ];

  selectedStatus: Status = this.status[0];

  private _name: string;

  @Input()
  set name(name: string) {
    this._name = (name && name.toUpperCase()) || null;
    this.nameChange.emit(name);
  }

  get name(): string {
    return this._name;
  }

  @Output() nameChange = new EventEmitter<string>();

  @Output() changeStatusEvent = new EventEmitter<string>();

  constructor(private communicationService: CommunicationService) {}

  changeStatus(selected: Status) {
    this.changeStatusEvent.emit(selected.name);
  }

  sendMessage() {
    this.communicationService.sendMessage('Here is message from child component over communication service!');
  }

}
