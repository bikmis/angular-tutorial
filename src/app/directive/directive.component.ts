import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FragmentService } from '../services/fragment.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  selectedFragment:string = null;
  isVisible: boolean = true;
  programingLanguage = ['c', 'c++', 'c#', 'Java', 'JavaScript', 'Python'];
  selectedLanguage: string = "Select a Language";

  constructor(private activatedRoute: ActivatedRoute, private fragmentService: FragmentService) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(x => this.selectedFragment = x);
    this.fragmentService.scroll();
  }

  toggleText(event) {
    if (this.isVisible) {
      this.isVisible = false;
      event.target.innerHTML = 'Show Text';
    }
    else {
      this.isVisible = true;
      event.target.innerHTML = 'Hide Text';
    }
  }

}
