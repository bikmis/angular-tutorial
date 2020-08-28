import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from './contact';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public contactList: Contact[] = [
    { id: 1, firstName: 'Jack', lastName: 'Nicholson' },
    { id: 2, firstName: 'Michael', lastName: 'Jackson' },
    { id: 3, firstName: 'John' },
    { id: 4, firstName: 'Tony', lastName: 'Brown' }
  ]

  public getDetail(contact: Contact) {
    this.router.navigate(['/angular/contact-detail', contact.id], { queryParams: { firstName: contact.firstName, lastName: contact.lastName } });
  }

}
