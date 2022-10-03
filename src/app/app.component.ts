import { Component, VERSION } from '@angular/core';
import { NRPTableRowAction } from './nrp-table/NrpTableTypes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  tableColumns = [
    {
      title: 'Name',
      key: 'name',
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
    { name: 'lijin', age: '37', rowActions: this.rowActions },
    { name: 'john', age: '30', rowActions: this.rowActions },
    { name: 'doe', age: '30', rowActions: this.rowActions },
  ];
}
