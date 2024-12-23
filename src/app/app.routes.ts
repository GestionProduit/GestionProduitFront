import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './client/pages/home/home.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { ClientDemoComponent } from './admin/pages/client-demo/client-demo.component';
import { RegisterComponent } from './client/pages/register/register.component';
import { LoginComponent } from './client/pages/login/login.component';


export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin/products', component: DashboardComponent },
  { path: 'admin/clients', component: ClientDemoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
