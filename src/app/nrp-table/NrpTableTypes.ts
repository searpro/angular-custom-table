export type NRPTableColumns = Array<NRPTableColumn>;

export type NRPTableColumn = {
  title: string;
  key: string;
  sortable: boolean;
  columnType: any;
  cssClassName?: string;
};

export type NRPTableRow = {
  [key: string]: any;
};

export type NRPTableRowActions = NRPTableRowAction[];

export type NRPTableRowAction = {
  title: string;
  enabled: boolean;
  action?: NRPTableRowActionFunction;
  tooltip?: string;
};

export type NRPTableData = NRPTableRow[];

export type NRPTableRowActionFunction = (
  row: NRPTableRow,
  action?: any
) => void;

export type NRPTableMetadata = {
  heading: string;
  subHeading?: string;
  actionButtons: NRPTableActionButton[];
};

export type NRPTableActionButton = {
  text: string;
  action: (context: any) => void;
  icon?: string | boolean;
  tooltip?: string;
  variant?: string;
  disabled?: boolean;
};

export interface NRPTable {
  tableColumns: NRPTableColumns;
  rowActions: NRPTableRowActions;
  tableData: NRPTableData;
  tableMetadata: NRPTableMetadata;
}
