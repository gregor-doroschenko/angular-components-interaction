import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status } from '../interfaces/status.interface';

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
  }

  get name(): string {
    return this._name;
  }

  @Output() changeStatusEvent = new EventEmitter<string>();

  changeStatus(selected: Status) {
    this.changeStatusEvent.emit(selected.name);
  }

}
