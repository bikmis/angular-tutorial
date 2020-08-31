import { Component, OnInit } from '@angular/core';
import { NodeUserService } from './node-user.service';

@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.scss']
})
export class NodeApiComponent implements OnInit {

  users = [];

  constructor(private nodeUserService: NodeUserService) { }

  ngOnInit(): void {
    this.getUsersFromNode();
  }

  getUsersFromNode() {
    this.nodeUserService.usersFromNodeApi$.subscribe((users: any) => {
      this.users = users;
    },
      error => console.error(error)
    )
  }

}
