import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroEditComponent } from '../hero-edit/hero-edit.component';


//canDeactivate runs when you leave a route / component
//canActivate runs when you get into a route / component

@Injectable({
  providedIn: 'root'
})
export class HeroEditGuard implements CanDeactivate<HeroEditComponent> {
  canDeactivate(
    component: HeroEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.heroEditForm.dirty){
        const title = component.heroEditForm.value.name || 'New Hero';
        return confirm(`Lose all changes to ${title}?`)
      }
    return true;
  }
  
}
