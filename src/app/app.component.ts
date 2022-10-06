import { Component, OnInit, VERSION } from '@angular/core';
import { faker } from '@faker-js/faker';
import {
  NRPTable,
  NRPTableColumns,
  NRPTableData,
  NRPTableMetadata,
  NRPTableRowActions,
} from './nrp-table/NrpTableTypes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, NRPTable {
  name = 'Angular ' + VERSION.major;

  tableColumns: NRPTableColumns = [
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
      columnType: 'date',
    },
    {
      title: 'Region',
      key: 'region',
      sortable: true,
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

  tableData: NRPTableData = [
    { firstName: 'lijin', lastName: 'Kurian', age: '37' },
    { firstName: 'john', lastName: 'Doe', age: '30' },
    { firstName: 'doe', lastName: 'Hannigan', age: '30' },
  ];

  tableMetadata: NRPTableMetadata = {
    heading: 'Sample Table',
    subHeading: '',
    actionButtons: [
      {
        text: 'Add User',
        icon: false,
        tooltip: 'add user',
        variant: 'primary',
        disabled: false,
        action: (context) => {
          console.log('Add User', context);
        },
      },
    ],
  };

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
    console.log(order);
  }

  resendInvite(row, action) {
    console.log('Resend invite', row);
  }
}
