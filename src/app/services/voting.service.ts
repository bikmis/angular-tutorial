import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  private yesVoteCount: number = 0;
  private noVoteCount: number = 0;

  private yesVote: Subject<number> = new Subject<number>();
  private noVote: Subject<number> = new Subject<number>();

  constructor() { }

  vote(agreed: boolean) {
    if (agreed) {
      ++this.yesVoteCount;
      this.yesVote.next(this.yesVoteCount);
    } else {
      ++this.noVoteCount;
      this.noVote.next(this.noVoteCount);
    }
  }

  getYesVotes() {
    return this.yesVote;
  }

  getNoVotes() {
    return this.noVote;
  }

  resetVotes() {
    this.yesVoteCount = 0;
    this.noVoteCount = 0;
  }

}
