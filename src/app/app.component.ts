import { Component, inject, OnInit, } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './client/pages/home/home.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { ClientDemoComponent } from './admin/pages/client-demo/client-demo.component';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, DashboardComponent, ClientDemoComponent, ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    ToastModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  currentRoute = '/'; // Replace with actual route logic

  checkRoute(): string {
    if (this.currentRoute === '/') {
      return 'register';
    } else if (this.currentRoute === '/admin/clients') {
      return 'admin/clients';
    } else if (this.currentRoute === '/admin/products') {
      return 'admin/products';
    }
   else if(this.currentRoute === '/home'){
    return 'home';
   } else if(this.currentRoute === '/login'){
    return 'login';
   }
    return '';
  }


  title = 'ecom-frontend';
  pathUrl:boolean = false;
  //private windowLocation = inject(Window);
  constructor(private route:Router, private primengConfig: PrimeNGConfig){}
  ngOnInit(){
    this.primengConfig.ripple = false;
  }
  // checkRoute():boolean{
  //   this.pathUrl=this.route.url.startsWith("/admin");
  //   return this.pathUrl;
  // }

}
