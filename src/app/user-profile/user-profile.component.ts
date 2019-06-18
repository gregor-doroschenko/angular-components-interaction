// user-profile.component.ts

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  private _name: string = '';

  @Input()
  set name(name: string) {
    this._name = (name && name.toUpperCase()) || null;
  }

  get name(): string {
    return this._name;
  }

  constructor() { }

  ngOnInit() { }

}
