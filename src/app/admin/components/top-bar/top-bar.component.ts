import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [AvatarModule, ToolbarModule, SideBarComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

}
