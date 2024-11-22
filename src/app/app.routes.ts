import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './client/pages/home/home.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
