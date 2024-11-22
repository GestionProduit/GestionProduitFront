import { Component } from '@angular/core';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
//import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { TableDemoComponent } from '../../components/table-demo/table-demo.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TopBarComponent, TableDemoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
