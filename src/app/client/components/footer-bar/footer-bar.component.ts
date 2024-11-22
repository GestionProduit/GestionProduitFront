import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  standalone: true,
  imports: [],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.scss',
  providers:[DatePipe]
})
export class FooterBarComponent {
  date: String | null="";
  constructor(private datePipe: DatePipe) {
    this.date = this.datePipe.transform(Date.now(), 'yyyy');
  }
}
