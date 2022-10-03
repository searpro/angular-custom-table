import { Component, Input, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NRPTableColumns, NRPTableData } from './NrpTableTypes';

@Component({
  selector: 'nrp-table',
  templateUrl: './nrp-table.component.html',
  styleUrls: ['./nrp-table.component.css'],
})
export class NrpTableComponent implements OnInit {
  @Input() tableData: NRPTableData;
  @Input() tableColumns: NRPTableColumns;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[];

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
  }
}
