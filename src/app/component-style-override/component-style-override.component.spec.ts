import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStyleOverrideComponent } from './component-style-override.component';

describe('ComponentStyleOverrideComponent', () => {
  let component: ComponentStyleOverrideComponent;
  let fixture: ComponentFixture<ComponentStyleOverrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentStyleOverrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentStyleOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
