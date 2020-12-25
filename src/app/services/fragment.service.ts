import { ElementRef, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FragmentService {

  constructor(private route: ActivatedRoute) { }
  //If the url has a fragment e.g. http://localhost:4200/angular/dummy-text#text2, the following code will scroll the page to that fragment if the page is refreshed or landed upon from outside of it. 
  public scroll(elements: ElementRef[]){
    this.route.fragment.subscribe((fragment: string) => {
      elements.forEach(element => {
        if (element.nativeElement.id === fragment) {
          setTimeout(() => {
            element.nativeElement.scrollIntoView();
          }, 0)
      }})
    })
  }

}
