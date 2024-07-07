import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { SimpleComponent } from './components/simple/simple.component';
@NgModule({
  declarations: [    SimpleComponent,
  ],
  imports: [BrowserModule, 
    MatButtonModule, AppRoutingModule, RouterModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [],
})
export class AppModule {}