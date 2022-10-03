export type NRPTableColumns = Array<NRPTableColumn>;

export type NRPTableColumn = {
  title: string;
  key: string;
  sortable: boolean;
  columnType: any;
};

export interface NRPTableRow {
  [key: string]: any;
}

export type NRPTableRowActions = NRPTableRowAction[];

export type NRPTableRowAction = {
  title: string;
  enabled: boolean;
  action?: NRPTableRowActionFunction;
  tooltip?: string;
};

export type NRPTableData = NRPTableRow[];

export type NRPTableRowActionFunction = (row: NRPTableRow) => void;
