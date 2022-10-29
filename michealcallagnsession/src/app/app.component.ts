import { Component, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Roster',
      url: '/roster',
      icon: 'people',
    },
  ]
  constructor(private platform: Platform, private students: StudentService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    await this.students.init();
  }


}
