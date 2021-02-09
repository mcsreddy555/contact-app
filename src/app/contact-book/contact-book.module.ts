import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactBookRoutingModule } from './contact-book-routing.module';
import { AllContactComponent } from './all-contact/all-contact.component';
import { ContactBookComponent } from './contact-book.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AllContactComponent, ContactBookComponent, AddContactComponent, EditContactComponent, ViewContactComponent],
  imports: [
    CommonModule,
    ContactBookRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ContactBookModule { }
