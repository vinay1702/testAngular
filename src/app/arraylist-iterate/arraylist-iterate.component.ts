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
    this.someArray = this.filter(this.someArray)
  }
  filter(kuchbhi: Array<any>) {
    /* kuchbhi = kuchbhi.filter(abc => abc !== false);
    for (let a in kuchbhi) {
      console.log('---> ' + a);
    } */
    return kuchbhi;
  }
}
