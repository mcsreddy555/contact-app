import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactBookService {

  

  constructor(private http:HttpClient) { }

  allContact():Observable<Contact>{
    const contactUrl="http://localhost:3000/contacts";
    return this.http.get<Contact>(contactUrl)
  }

  viewContact(contactId):Observable<Contact>{
    const contactUrl="http://localhost:3000/contacts/"+contactId;
    return this.http.get<Contact>(contactUrl)
  }

  createContact(contact):Observable<Contact>{
    const contactUrl="http://localhost:3000/contacts"
    return this.http.post<Contact>(contactUrl,contact)
  }

  updateContact(contactId,contact):Observable<Contact>{
    const contactUrl="http://localhost:3000/contacts/"+contactId;
    return this.http.put<Contact>(contactUrl,contact)
  }

  deleteContact(contactId):Observable<Contact>{
    const contactUrl="http://localhost:3000/contacts/"+contactId;
    return this.http.delete<Contact>(contactUrl)
  }
}
