import { Component, inject, OnInit, } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './client/pages/home/home.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ecom-frontend';
  pathUrl:boolean = false;
  //private windowLocation = inject(Window);
  constructor(private route:Router, private primengConfig: PrimeNGConfig){}
  ngOnInit(){
    this.primengConfig.ripple = false;
  }
  checkRoute():boolean{
    this.pathUrl=this.route.url.startsWith("/admin");
    return this.pathUrl;
  }

}
