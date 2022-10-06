import { Component, Input, OnInit } from '@angular/core';
import { NRPTableColumn } from '../NrpTableTypes';

@Component({
  selector: 'nrp-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css'],
})
export class TableFilterComponent implements OnInit {
  @Input() column: NRPTableColumn;

  constructor() {}

  ngOnInit() {}

  preventSort(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('preventing', e);
  }
}
