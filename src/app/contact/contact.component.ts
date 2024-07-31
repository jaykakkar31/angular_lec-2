import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { invalidEmail } from './invalidEmail';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor() { }

  contactForm = new FormGroup({
    senderName: new FormControl('',Validators.required),
    senderEmail: new FormControl('',[Validators.required,Validators.email,invalidEmail]),
    senderMessage: new FormControl('',[Validators.required,Validators.minLength(10)])
  })
  // senderNameControl = new FormControl('')
  // senderEmailControl = new FormControl('')
  // senderMessageControl = new FormControl('')
  submitForm() {
    // if (this.senderEmailControl.dirty) {
      console.log("CALWELD----------",this.contactForm.value);

    //   alert("Email field is changed")
    // }
  }
}
