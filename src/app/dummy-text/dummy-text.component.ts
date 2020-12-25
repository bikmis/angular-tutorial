import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FragmentService } from '../services/fragment.service';

@Component({
  selector: 'app-dummy-text',
  templateUrl: './dummy-text.component.html',
  styleUrls: ['./dummy-text.component.scss']
})
export class DummyTextComponent implements OnInit, AfterViewInit {

  constructor(private fragmentService: FragmentService) { }

  @ViewChild('text2') text2: ElementRef;

  ngOnInit(): void { }

  ngAfterViewInit(){
    this.fragmentService.scroll(this.text2);
  }

}
