import { Component, Input, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NRPTableColumns, NRPTableData, NRPTableRowAction, NRPTableRowActions } from './NrpTableTypes';

@Component({
  selector: 'nrp-table',
  templateUrl: './nrp-table.component.html',
  styleUrls: ['./nrp-table.component.css'],
})
export class NrpTableComponent implements OnInit {
  @Input() tableData: NRPTableData;
  @Input() tableColumns: NRPTableColumns;
  @Input() rowActions: NRPTableRowActions; 

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[];
  tCols: string[];

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
    this.displayedColumns = this.tableColumns.map(c => c.title); 
  }
  
}
