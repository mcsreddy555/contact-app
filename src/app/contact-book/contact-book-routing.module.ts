import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactBookComponent } from './contact-book.component';
import { AllContactComponent } from './all-contact/all-contact.component'
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {path:'',component:ContactBookComponent, children:[
    {path:'',component:AllContactComponent},
    {path:'contacts', component:AllContactComponent},
    {path:'add-contact', component:AddContactComponent},
    {path:'edit/:id', component:EditContactComponent},
    // {path:'view-contact/:id', component:ViewContactComponent},
    {path:':id',component:ViewContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactBookRoutingModule { }
