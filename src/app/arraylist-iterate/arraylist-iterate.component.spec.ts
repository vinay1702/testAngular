import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraylistIterateComponent } from './arraylist-iterate.component';

describe('ArraylistIterateComponent', () => {
  let component: ArraylistIterateComponent;
  let fixture: ComponentFixture<ArraylistIterateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraylistIterateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraylistIterateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
