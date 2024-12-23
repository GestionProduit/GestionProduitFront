import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from '../../../service/clientservice/authService/authService.service';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RegisterRequest } from '../../../module/Client';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers : [MessageService, ConfirmationService, NgModule, provideAnimations()]
})
export class RegisterComponent  {

  register: RegisterRequest = {
    username: '',
    email: '',
    password: ''
  };
  submitted = false;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  isValidEmail(email: string): boolean {
    const emailRegex = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return emailRegex.test(email);
  }

  registerUser() {
    this.submitted = true;

    // Validate the form
    if (!this.register.username || !this.register.email || !this.register.password || !this.isValidEmail(this.register.email)) {
      return;
    }

    this.isLoading = true;

    // Call the registration service
    //console.log(this.register.username);
    this.authService.register(this.register).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message || 'Registration successful'
        });

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);
      },
      error: (error) => {
        this.isLoading = false;
        const errorMsg = error.error?.message || 'Registration failed';
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMsg
        });
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }


  // registerForm!: FormGroup;
  // submitted = false;
  // isLoading = false;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private authService: AuthService,
  //   private router: Router,
  //   private messageService: MessageService
  // ) {}

  // ngOnInit() {
  //   this.registerForm = this.formBuilder.group({
  //     username: ['', [Validators.required, Validators.minLength(4)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  // }

  // //
  // get f() { return this.registerForm.controls; }

  // onSubmit() {
  //   this.submitted = true;

  
  //   if (this.registerForm.invalid) {
  //     return;
  //   }

  //   this.isLoading = true;

  //   this.authService.register(this.registerForm.value).subscribe({
  //     next: (response) => {
  //       this.messageService.add({
  //         severity: 'success', 
  //         summary: 'Success', 
  //         detail: response.message || 'Registration successful'
  //       });

  //       setTimeout(() => {
  //         this.router.navigate(['/']);
  //       }, 1500);
  //     },
  //     error: (error) => {
  //       this.isLoading = false;
        
    
  //       const errorMsg = error.error?.message || 'Registration failed';
        
  //       this.messageService.add({
  //         severity: 'error', 
  //         summary: 'Error', 
  //         detail: errorMsg
  //       });
  //     },
  //     complete: () => {
  //       this.isLoading = false;
  //     }
  //   });
  // }
}