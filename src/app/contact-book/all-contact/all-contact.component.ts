import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactBookService } from '../contact-book.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {

  contacts:Contact[]=[];
  // contacts:Contact;
  firstName:any;

  constructor(private service:ContactBookService, private router:Router) { }

  ngOnInit(): void {
    this.service.allContact().subscribe((data)=>{
      // this.contacts=data;
      this.contacts=Object.keys(data).map(key=>data[key])

    })
  }


  viewContact(id:number){
    this.router.navigate(['view-contact',id]);
    this.router.navigate([id]);
  }

  editContact(id:number){
    this.router.navigate(['edit',id])
  }

  deleteContact(id:number){
    confirm("Delete this item?")
    this.service.deleteContact(id).subscribe()
  }

  Search(){
    if(this.firstName==""){
      this.ngOnInit();
    }else{
      this.contacts=this.contacts.filter(res=>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
      })
    }
  }

}
