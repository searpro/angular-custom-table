import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NrpTableComponent } from './nrp-table/nrp-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTableModule ],
  declarations: [ AppComponent, HelloComponent, NrpTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
