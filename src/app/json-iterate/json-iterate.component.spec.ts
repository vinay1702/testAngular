import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonIterateComponent } from './json-iterate.component';

describe('JsonIterateComponent', () => {
  let component: JsonIterateComponent;
  let fixture: ComponentFixture<JsonIterateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonIterateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonIterateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
