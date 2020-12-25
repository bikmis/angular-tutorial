import { ViewportRuler } from '@angular/cdk/scrolling';
import { ViewportScroller } from '@angular/common';
import { ElementRef, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FragmentService {

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }
  //when the page is refreshed or landed upon from outside of it with a url with a fragment (http://localhost:4200/angular/dummy-text#text2), the following code will scroll to fragment mentioned in the url.
  public scroll(){
    this.route.fragment.subscribe((fragment: string) => {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(fragment);
          }, 0)
    })
  }

}
