import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../pojo/task/task';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [NgbCarouselConfig, NgbCarousel]
})
export class TestComponent implements OnInit {
  @Input() abc;
  constructor(config: NgbCarouselConfig, a: NgbCarousel) {
    a.pause();
    config.interval = -1;
  }

  ngOnInit() {
  }

}
