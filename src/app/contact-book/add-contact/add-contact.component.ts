import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactBookService } from '../contact-book.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contId=Math.floor(Math.random()*100)+1

  
  constructor(private service:ContactBookService, private router:Router) { }


  ngOnInit(): void {
  }

  onSubmit(form){

    let newContact={
      id:this.contId,
      firstName:form.value.firstName,
      lastName:form.value.lastName,
      email:form.value.email,
      mobile:form.value.mobile 
    }
    this.service.createContact(newContact).subscribe();

    alert("Contact Added SuccesFully")
    this.router.navigate(['/contacts'])
  
  }

  

}
