import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { ContactDetail } from "./contact-detail";
import { Contact } from '../contact-list/contact';



@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  public contact: Contact = <Contact>{};
  public contactDetail: ContactDetail = <ContactDetail>{};
  public contactDetails: ContactDetail[] = [
    { id: 1, houseNumber: "245", street: "Cyber Way", city: "Fairfax", state: "VA", zip: 22042 },
    { id: 2, houseNumber: "137", street: "Frying Pan", city: "Manassas", state: "VA", zip: 31254 },
    { id: 3, houseNumber: "2445", street: "Circle Circus", city: "Falls Church", state: "VA", zip: 24251 },
    { id: 4, houseNumber: "8941", street: "Bendy Way", city: "Montgomery", state: "MD", zip: 20111 }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContactDetail();
  }

  getContactDetail() {
    this.activatedRoute.params.pipe(mergeMap(p => {
      return this.activatedRoute.queryParams.pipe(map(qp => {
        return {
          id: p.id,
          firstName: qp.firstName,
          lastName: qp.lastName
        }
      }))
    })).subscribe(x => { this.contact = x });

    this.contactDetail = this.contactDetails.find(c => c.id === +this.contact.id);
  }

  onBackToContactList() {
    this.router.navigate(['/angular/contact-list']);
  }

}
