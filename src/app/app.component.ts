import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-introduction';
  name: string = "sakis-angular";
  lastname: string = "Angular JS"; 
  
  person: Person = {
    givenName: "Alice",
    surName: "W.",
    age: 20,
    email: "test@aueb.gr",
    address: "Patision 255"
  }
}
