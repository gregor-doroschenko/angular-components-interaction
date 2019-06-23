// user-profile.component.ts

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Status } from '../interfaces/status.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  status: Status[] = [
    { name: 'working' },
    { name: 'vacation' },
    { name: 'remote' },
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

  constructor() { }

  ngOnInit() { }

  changeStatus(selected: Status) {
    this.changeStatusEvent.emit(selected.name);
  }

}
