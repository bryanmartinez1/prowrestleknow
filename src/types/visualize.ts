import { ChartData, ChartOptions } from "chart.js";

export type TableRow = {
  [key: string]: string | number | boolean | null;
};

export type TableData = {
  headers: string[];
  rows: TableRow[];
};

export type TableConfig = {
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  sortable?: boolean;
  customStyles?: {
    table?: string;
    header?: string;
    row?: string;
    cell?: string;
  };
};

export type TableProps = {
  data: TableData;
  config?: TableConfig;
};

export type BarChartConfig = {
  data: ChartData<"bar">;
  options?: ChartOptions<"bar">;
};

export type PieChartConfig = {
  data: ChartData<"pie">;
  options?: ChartOptions<"pie">;
};

export type TimelineConfig = {};
