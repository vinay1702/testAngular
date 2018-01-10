import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraylist-iterate',
  templateUrl: './arraylist-iterate.component.html',
  styleUrls: ['./arraylist-iterate.component.css']
})
export class ArraylistIterateComponent implements OnInit {

  constructor() { }
  someArray = [1, "string", false];
  ngOnInit() {
    for (let entry of this.someArray) {
      console.log(entry); // 1, "string", false
    }
  }
}
