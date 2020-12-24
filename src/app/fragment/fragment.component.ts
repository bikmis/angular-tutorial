import { Component, OnInit } from '@angular/core';
import { FragmentService } from '../services/fragment.service';

@Component({
  selector: 'app-fragment',
  templateUrl: './fragment.component.html',
  styleUrls: ['./fragment.component.scss']
})
export class FragmentComponent implements OnInit {

  constructor(private fragmentService: FragmentService) { }

  ngOnInit(): void {
    this.fragmentService.scroll();
  }

}
