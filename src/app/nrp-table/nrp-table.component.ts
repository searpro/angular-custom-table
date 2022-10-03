import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import {
  NRPTableColumns,
  NRPTableData,
  NRPTableRowAction,
  NRPTableRowActions,
} from './NrpTableTypes';

@Component({
  selector: 'nrp-table',
  templateUrl: './nrp-table.component.html',
  styleUrls: ['./nrp-table.component.css'],
})
export class NrpTableComponent implements OnInit, AfterViewInit {
  @Input() tableData: NRPTableData;
  @Input() tableColumns: NRPTableColumns;
  @Input() rowActions: NRPTableRowActions;
  @Input() sortChange;

  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[];
  tCols: string[];

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
    this.displayedColumns = this.tableColumns.map((c) => c.title);
    if (this.rowActions) {
      this.displayedColumns.push('Actions');
      this.tableColumns.push({
        sortable: false,
        key: 'actions',
        title: 'Actions',
        columnType: 'action',
      });
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  isDisabled(row, action) {
    //console.log(action);
  }
}
