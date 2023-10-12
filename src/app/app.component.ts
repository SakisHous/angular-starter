import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-introduction';
  name: string = "sakis-angular";
  lastname: string = "Angular JS";

  person = {
    givenName: "Sakis",
    surName: "Hous",
    age: 0x1f,
    email: "test@aueb.gr"
  }
}
