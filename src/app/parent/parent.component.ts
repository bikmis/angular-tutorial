import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Voter } from '../child/voter';
import { ChildComponent } from '../child/child.component';
import { VotingService } from '../services/voting.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit, OnDestroy {
  public agree = 0;
  public disagree = 0;

  public agreeObs = 0;
  public disagreeObs = 0;

  @ViewChild(ChildComponent)
  public child: ChildComponent;
  public name: string = null;
  public sum: number = null;

  public voter: Voter = <Voter>{ name: "John" };

  subscriptions: Subscription[] = [];

  constructor(private votingService: VotingService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.votingService.resetVotes();
    this.yesVoteCount();
    this.noVoteCount();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.name = this.child.name;
      this.sum = this.child.addTwoNumber(2, 3);
    }, 0);
  }

  public onVoted(agreed: boolean) {
    agreed ? this.agree++ : this.disagree++;
  }

  yesVoteCount() {
    let subscription = this.votingService.getYesVotes().subscribe(x => this.agreeObs = x);
    this.subscriptions.push(subscription);
  }

  noVoteCount() {
    let subscription = this.votingService.getNoVotes().subscribe(x => this.disagreeObs = x);
    this.subscriptions.push(subscription);
  }

}
