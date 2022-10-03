export type NRPTableColumns = Array<NRPTableColumn>;

export type NRPTableColumn = {
  title: string;
  key: string;
  sortable: boolean;
  columnType: 'date' | 'string' | 'number';
};

export interface NRPTableRow {
  [key: string]: any;
  rowActions: NRPTableRowAction[];
}

export type NRPTableRowAction = {
  title: string;
  enabled: boolean;
  action?: NRPTableRowActionFunction;
  tooltip?: string;
};

export type NRPTableData = NRPTableRow[];

export type NRPTableRowActionFunction = (row: NRPTableRow) => void;
