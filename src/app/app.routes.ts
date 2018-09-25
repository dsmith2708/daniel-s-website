import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HobbiesAndInterestsComponent } from './components/hobbies-and-interests/hobbies-and-interests.component';
import { MyCvComponent } from './components/my-cv/my-cv.component';
import { PreviousProjectsComponent } from './components/previous-projects/previous-projects.component';

export const appRoutes: Routes = [
    { path: 'home', component: AboutMeComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'hobbies-interests', component: HobbiesAndInterestsComponent },
    { path: 'my-cv', component: MyCvComponent },
    { path: 'previous-projects', component: PreviousProjectsComponent },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ];
