import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements AfterViewInit {

  name = 'Gregor Doroschenko';
  userStatus: string;

  @ViewChild('userProfile', { static: true })
  userProfile: UserProfileComponent;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.userProfile.changeStatus({name: 'changed from life cycle hook'});
    }, 3000);
  }

  setName() {
    this.userProfile.name = 'Max Mustermann';
  }

}
