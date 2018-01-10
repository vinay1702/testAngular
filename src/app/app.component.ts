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
    obj1: StudentProfile = JSON.parse('[{ "batchRank": 234,"gender": "female","isVerified": true,"coins": 45,"mobile": 3456723453,"experiencePoints": 4,"profileImage": "http://alpha.talentify.in//users/A.png","firstName": "Sumant","userCategory": "COLLEGE_STUDENT","location": "bangalore","id": 28,"userType": "TRAINER","email": "manoj@istarindia.com"},{ "batchRank": 444,"gender": "male","isVerified": true,"coins": 33,"mobile": 8347988409,"experiencePoints": 4,"profileImage": "http://alpha.talentify.in//users/A.png","firstName": "Arvind Kumar Yadav","userCategory": "COLLEGE_STUDENT","location": "Guntur","id": 80,"userType": "STUDENT","email": "manoj@istarindia.com"}]');

  ngOnInit() {
    console.log('cdacascsa       -->'+this.obj.myString);
    console.log(this.obj.myNumber);
    console.log(this.obj);
    console.log(this.obj1);
  }
  
}


