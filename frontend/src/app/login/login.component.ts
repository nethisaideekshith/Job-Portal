import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  showForm=false;
  hasform=false;
  errorMsg: string = '';
  constructor(private fb: FormBuilder, private authService:AuthService) {
    console.log("constructor loaded");
  }
  ngOnInit():void{
    console.log("ngoninit loaded");
     this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // using built-in email validator
      password: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9!@#$%^&*()_+=\-]{6,}$/)]],
      role: ['',[Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginform.valid) {
      console.log('Form submitted:', this.loginform.value);
      const formData=this.loginform.getRawValue();
      this.showForm=false;
      this.hasform=true;
      // Handle login logic (e.g., call an API)
      this.authService.login(this.loginform.value).subscribe({
      next: (res) => {
        console.log('Login success:', res);
        this.errorMsg = '';
        // Handle success (e.g., store token, navigate)
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorMsg = 'Invalid Credentials';
      }
    });
    } else {
      this.loginform.markAllAsTouched(); // show validation messages
    }
  }
  toggleform(){
    this.showForm=true;
  }
}

