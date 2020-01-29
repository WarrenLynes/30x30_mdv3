import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { KicksModule } from './kicks/kicks.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    MatSidenavModule,
    MatToolbarModule,
    KicksModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
