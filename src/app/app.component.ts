import { Component, OnInit, VERSION } from '@angular/core';
import { faker } from '@faker-js/faker';
import { NRPTableRowActions } from './nrp-table/NrpTableTypes';

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
      title: 'Rank',
      key: 'rank',
      sortable: false,
      columnType: 'number',
    },
    {
      title: 'Region',
      key: 'region',
      sortable: true,
      columnType: 'number',
    },
  ];

  rowActions: NRPTableRowActions = [
    {
      title: 'Edit',
      enabled: true,
      action: (row) => console.log(row),
    },
    {
      title: 'View',
      enabled: true,
      action: (row) => alert(JSON.stringify(row)),
    },
    {
      title: 'Resend Invite',
      enabled: false,
      action: this.resendInvite,
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
    while (i < 10) {
      users.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        rank: faker.name.jobTitle(),
        region: faker.address.country(),
      });
      i++;
    }
    this.tableData = users;
  }

  sortChange(order) {
    //console.log(order);
  }

  resendInvite(row, action) {
    console.log('Resend invite', row);
  }
}
