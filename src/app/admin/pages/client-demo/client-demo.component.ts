import { Component } from '@angular/core';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { TableClientComponent } from '../../components/table-client/table-client.component';



@Component({
  selector: 'app-client-demo',
  standalone: true,
  imports: [TopBarComponent,TableClientComponent],
  templateUrl: './client-demo.component.html',
  styleUrl: './client-demo.component.scss'
})
export class ClientDemoComponent {

}
