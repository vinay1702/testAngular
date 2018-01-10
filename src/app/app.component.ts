import { Component } from '@angular/core';
import { Task } from './pojo/task/task';
import { StudentProfile } from './pojo/student_profile/student-profile';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  obj: Task = JSON.parse('{ "myString": "cds ", "myNumber": 4 }');

  ngOnInit() {
    console.log('cdacascsa       -->' + this.obj.myString);
    console.log(this.obj.myNumber);
    console.log(this.obj);
  }

}


