import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { MatSidenavModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyCvComponent } from './components/my-cv/my-cv.component';
import { PreviousProjectsComponent } from './components/previous-projects/previous-projects.component';
import { HobbiesAndInterestsComponent } from './components/hobbies-and-interests/hobbies-and-interests.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MyCvComponent,
    PreviousProjectsComponent,
    HobbiesAndInterestsComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
