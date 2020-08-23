import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Voter} from './voter';
import { VotingService } from '../services/voting.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
    
  @Input() voter: Voter = <Voter>{};
  @Output() voteEvent = new EventEmitter<boolean>();
  public name = "Jack";

  constructor(private votingService: VotingService) { }

  ngOnInit(): void { }
  
  public vote(agreed: boolean){
    this.voteEvent.emit(agreed);
  }

  public addTwoNumber(num1: number, num2: number): number{
    return num1 + num2;
  }

  voteObs(agreed: boolean) {
      this.votingService.vote(agreed);   
  }



}
