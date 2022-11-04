import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {

  students$: Observable<Student[]>;
  constructor(private studentsService:StudentService) {
    this.students$ = this.studentsService.allStudents()
  }



  ngOnInit() {
    console.log("hello world")
  }

}
