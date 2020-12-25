import { ElementRef, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FragmentService {

  constructor(private route: ActivatedRoute) { }

  public scroll(element: ElementRef){
    this.route.fragment.subscribe((fragment: string) => {
      if (element.nativeElement.id === fragment) {
          setTimeout(() => {
            element.nativeElement.scrollIntoView();
          }, 0)
      }
    })
  }

}
