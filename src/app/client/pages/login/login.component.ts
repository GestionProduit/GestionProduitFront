import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../../service/clientservice/authService/authService.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRequest } from '../../../module/Client';
import { provideAnimations } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,
      InputTextModule,
      ButtonModule,
      ToastModule,TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, InputNumberModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss' ,
  providers : [MessageService, ConfirmationService, NgModule, provideAnimations()]
})
export class LoginComponent {

  login: LoginRequest = {
    username: '',
    password: ''
  };
  
  submitted = false;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  loginUser() {
    this.submitted = true;

    // Validate the form
    if (!this.login.username || !this.login.password) {
      return;
    }

    this.isLoading = true;

    // Call the login service
    this.authService.login(this.login).subscribe({
      next: (response:any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login successful'
        });

        setTimeout(() => {
          this.router.navigate(['/home']); // Adjust route as needed
        }, 1500);
      },
      error: (error) => {
        this.isLoading = false;
        const errorMsg = error.error?.message || 'Login failed';
        
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

}
