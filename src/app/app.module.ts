import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MapTestComponent } from './map-test/map-test.component';
import { JsonIterateComponent } from './json-iterate/json-iterate.component';
import { ArraylistIterateComponent } from './arraylist-iterate/arraylist-iterate.component';


@NgModule({
  declarations: [
    AppComponent,
    MapTestComponent,
    JsonIterateComponent,
    ArraylistIterateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
