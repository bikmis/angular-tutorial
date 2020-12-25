import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FragmentService } from '../services/fragment.service';

@Component({
  selector: 'app-dummy-text',
  templateUrl: './dummy-text.component.html',
  styleUrls: ['./dummy-text.component.scss']
})
export class DummyTextComponent implements OnInit {

  constructor(private fragmentService: FragmentService) { }

  ngOnInit(): void { 
    this.fragmentService.scroll();
  }

}
