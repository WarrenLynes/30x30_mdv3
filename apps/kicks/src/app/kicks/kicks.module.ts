import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { KicksComponent } from './kicks.component';
import { MaterialModule } from '@mdv3/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListComponent, DetailComponent, KicksComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [KicksComponent]
})
export class KicksModule { }
