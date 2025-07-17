import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  showForm=false;
  hasform=false;

  constructor(private fb: FormBuilder) {
    console.log("constructor loaded");
  }
  ngOnInit():void{
    console.log("ngoninit loaded");
     this.loginform = this.fb.group({
      Email: ['', [Validators.required, Validators.email]], // using built-in email validator
      Password: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9!@#$%^&*()_+=\-]{6,}$/)]]
    });
  }

  onSubmit() {
    if (this.loginform.valid) {
      console.log('Form submitted:', this.loginform.value);
      const formData=this.loginform.getRawValue();
      this.showForm=false;
      this.hasform=true;
      // Handle login logic (e.g., call an API)
    } else {
      this.loginform.markAllAsTouched(); // show validation messages
    }
  }
  toggleform(){
    this.showForm=true;
  }
}

