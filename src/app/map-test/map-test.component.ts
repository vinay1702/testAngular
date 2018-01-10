import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-test',
  templateUrl: './map-test.component.html',
  styleUrls: ['./map-test.component.css']
})
export class MapTestComponent implements OnInit {

  constructor() { }

  mymap = new Map<String, String>();

  ngOnInit() {
    this.mymap.set('vinay', 'sharma');
    this.mymap.set('djhdkjd', 'sharma');
    this.mymap.set('sm,djb', 'sharma');
    this.mymap.set('sd,jdsjs,db', 'sharma');
    this.mymap.set('sd,ndjbsd', 'sharma');
    this.mymap.set('dsbmabkdbdsa', 'sharma');
    this.mymap.set('sdjjhahsd', 'sharma');
    console.log(' map size ' + this.mymap.size);
    this.mymap.forEach((value: string, key: string) => {
      console.log(key, value);

    });
  }

}
