import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitles = [
    {route: '/home', name: 'Home'},
    {route: '/about-me', name: 'About me'},
    {route: '/hobbies-interests', name: 'Hobbies and Interests'},
    {route: '/my-cv', name: 'My CV'},
    {route: '/previous-projects', name: 'Previous Projects'}
  ] ;
  title = 'Daniel Smith Portfolio';
  pageTitle = 'Home';

  constructor(activatedRoute: ActivatedRoute, public router: Router) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      debounceTime(1000)
    ).subscribe(
      x => {
        this.setPageTitle((x as any).urlAfterRedirects);
      }
    );
  }

  setPageTitle(currentRoute: string) {
     this.pageTitle = this.pageTitles.filter((page) => {
      return page.route === currentRoute;
    })[0].name;
  }

}
