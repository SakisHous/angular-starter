import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    PersonComponent, 
    PersonAltComponent, 
    EventBindComponent, 
    OutputDemoComponent,
    PersonCardComponent
  ],
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
  
  sendUser: Person | undefined;
  
  users: Person[] = [
    {
      givenName: 'John',
      surName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: '123 Main St',
      photoURL: 'https://i.pravatar.cc/?img=1'
    },
    {
      givenName: 'Jane',
      surName: 'Doe',
      age: 28,
      email: 'jane.doe@example.com',
      address: '123 Main St',
      photoURL: 'https://i.pravatar.cc/?img=2'
    },
    {
      givenName: 'Jim',
      surName: 'Brown',
      age: 45,
      email: 'jim.brown@example.com',
      address: '456 Park Ave',
      photoURL: 'https://i.pravatar.cc/?img=3'
    },
    {
      givenName: 'Jill',
      surName: 'Brown',
      age: 42,
      email: 'jill.brown@example.com',
      address: '456 Park Ave',
      photoURL: 'https://i.pravatar.cc/?img=4'
    },
    {
      givenName: 'Jake',
      surName: 'Smith',
      age: 36,
      email: 'jake.smith@example.com',
      address: '789 Broadway',
      photoURL: 'https://i.pravatar.cc/?img=5'
    },
    {
      givenName: 'Judy',
      surName: 'Smith',
      age: 34,
      email: 'judy.smith@example.com',
      address: '789 Broadway',
      photoURL: 'https://i.pravatar.cc/?img=6'
    },
    {
      givenName: 'Jack',
      surName: 'Johnson',
      age: 50,
      email: 'jack.johnson@example.com',
      address: '321 Oak St',
      photoURL: 'https://i.pravatar.cc/?img=7'
    },
    {
      givenName: 'Julie',
      surName: 'Johnson',
      age: 48,
      email: 'julie.johnson@example.com',
      address: '321 Oak St',
      photoURL: 'https://i.pravatar.cc/?img=8'
    },
    {
      givenName: 'Jerry',
      surName: 'Davis',
      age: 55,
      email: 'jerry.davis@example.com',
      address: '654 Pine St',
      photoURL: 'https://i.pravatar.cc/?img=9'
    },
    {
      givenName: 'June',
      surName: 'Davis',
      age: 53,
      email: 'june.davis@example.com',
      address: '654 Pine St',
      photoURL: 'https://i.pravatar.cc/?img=10'
    }
  ]

  onDeleteUser(i: number) {
    this.users.splice(i, 1)
  }

  onSendUser(user: Person) {
    this.sendUser = user
  }
}
