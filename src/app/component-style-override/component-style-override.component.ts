import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-style-override',
  templateUrl: './component-style-override.component.html',
  styleUrls: ['./component-style-override.component.css'],
  encapsulation: ViewEncapsulation.None
  /*
  This to override CSS of inbuild CSS to component.css
  */
})
export class ComponentStyleOverrideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
