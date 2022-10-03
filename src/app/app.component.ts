import { Component, OnInit, VERSION } from '@angular/core';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  tableColumns = [
    {
      title: 'First Name',
      key: 'firstName',
      sortable: true,
      columnType: 'string',
    },
    {
      title: 'Last Name',
      key: 'lastName',
      sortable: true,
      columnType: 'string',
    },
    {
      title: 'Age',
      key: 'age',
      sortable: true,
      columnType: 'number',
    },
  ];
  rowActions = [
    {
      title: 'edit',
      enabled: true,
      action: (row) => console.log(row),
    },
    {
      title: 'view',
      enabled: true,
      action: (row) => alert(JSON.stringify(row)),
    },
  ];
  tableData = [
    { firstName: 'lijin', lastName: 'Kurian', age: '37' },
    { firstName: 'john', lastName: 'Doe', age: '30' },
    { firstName: 'doe', lastName: 'Hannigan', age: '30' },
  ];

  ngOnInit() {
    const users = []; 
    let i = 0; 
    while (i < 10 ){
      users.push({
        firstName: faker.name.firstName();
        lastName: faker.name.lastName(),
        rank: faker.name.jobTitle,
        region: faker.address.countryCode
      })
    }
  }
}
