import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MapTestComponent } from './map-test/map-test.component';
import { JsonIterateComponent } from './json-iterate/json-iterate.component';
import { ArraylistIterateComponent } from './arraylist-iterate/arraylist-iterate.component';
import { TestComponent } from './test/test.component';
import { ComponentStyleOverrideComponent } from './component-style-override/component-style-override.component';


@NgModule({
  declarations: [
    AppComponent,
    MapTestComponent,
    JsonIterateComponent,
    ArraylistIterateComponent,
    TestComponent,
    ComponentStyleOverrideComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
