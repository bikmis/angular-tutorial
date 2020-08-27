import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, tap, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  background = "primary";
  color = "accent";
  selectedTab: string = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
    //The following code sets a value to selectedTab from the url when user clicks on a nav bar tab or browser back / forward button or any of router links, or refreshes the page or hits enter at the address bar. Use NavigationEnd event. NavigationStart is not available at the constructor, but available in ngOnInit. When you refresh the page or hit Enter at the address bar, router events are not available in ngOnInit, so constructor is the only place to receive router event NavigationEnd after the page refresh or hitting Enter in the address bar. Use urlAfterRedirects property of the event which holds the url. localhost:4200 (redirects to localhost:4200/angular/home) is not captured by url, but urlAfterRedirects has this value. 

    this.router.events.pipe(filter((event) => {
      return (event instanceof NavigationEnd);
    })).subscribe((event: NavigationEnd) => {
      let tabName = event.urlAfterRedirects.split('/')[1];
      this.selectedTab = tabName;
    });

  }

  ngOnInit(): void { }

  logout(){
    this.authService.logoutUser();
  }

  email$ = this.authService.getEmail();
}
