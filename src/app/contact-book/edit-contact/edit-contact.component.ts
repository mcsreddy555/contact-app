import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactBookService } from '../contact-book.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactId=0;
  contact:Contact;
  constructor(private service:ContactBookService,
              private router:Router,
              private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.contactId=data.id;

      this.service.viewContact(this.contactId).subscribe((data)=>{
        this.contact=data;
      })
    })
  }

  onSubmit(form){
    let updatedContact={
      id:this.contactId,
      firstName:this.contact.firstName,
      lastName:this.contact.lastName,
      email:this.contact.email,
      mobile:this.contact.mobile
    }
    this.service.updateContact(this.contactId,updatedContact).subscribe();
    alert("Contact Updated...!")
    this.router.navigate([this.contactId])
  }

}
