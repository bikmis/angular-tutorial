import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FragmentService } from '../services/fragment.service';

@Component({
  selector: 'app-fragment',
  templateUrl: './fragment.component.html',
  styleUrls: ['./fragment.component.scss']
})
export class FragmentComponent implements OnInit, AfterViewInit {

  constructor(private fragmentService: FragmentService) { }
  @ViewChild('text1') text1: ElementRef;

  ngAfterViewInit(): void {
    this.fragmentService.scroll(this.text1);
  }

  ngOnInit(): void { }

}
