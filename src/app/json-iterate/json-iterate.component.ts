import { Component, OnInit } from '@angular/core';
import { StudentProfile } from '../pojo/student_profile/student-profile';

@Component({
  selector: 'app-json-iterate',
  templateUrl: './json-iterate.component.html',
  styleUrls: ['./json-iterate.component.css']
})
export class JsonIterateComponent implements OnInit {

  constructor() { }
  obj1: StudentProfile = JSON.parse('[{ "batchRank": 234,"gender": "female","isVerified": true,"coins": 45,"mobile": 3456723453,"experiencePoints": 4,"profileImage": "http://alpha.talentify.in//users/A.png","firstName": "Sumant","userCategory": "COLLEGE_STUDENT","location": "bangalore","id": 28,"userType": "TRAINER","email": "manoj@istarindia.com"},{ "batchRank": 444,"gender": "male","isVerified": true,"coins": 33,"mobile": 8347988409,"experiencePoints": 4,"profileImage": "http://alpha.talentify.in//users/A.png","firstName": "Arvind Kumar Yadav","userCategory": "COLLEGE_STUDENT","location": "Guntur","id": 80,"userType": "STUDENT","email": "manoj@istarindia.com"}]');

ngOnInit() {
  console.log(this.obj1);
}
}
