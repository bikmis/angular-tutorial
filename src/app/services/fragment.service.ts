import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FragmentService {

  constructor(private route: ActivatedRoute) { }

  public scroll(){
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment) {
        const element = document.querySelector("#"+fragment)
        if(element){
          setTimeout(() => {
            element.scrollIntoView();
          }, 0)
        }
      }
    })
  }

}
