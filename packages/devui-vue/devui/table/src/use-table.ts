import { computed } from 'vue';
import { TablePropsTypes } from './table.type';

export function useTable(props: TablePropsTypes): any {
  const classes = computed(() => ({
    'devui-table': true,
    'devui-table-striped': props.striped,
    'header-bg': props.headerBg,
    'table-layout-auto': props.tableLayout === 'auto'
  }));

  return { classes };
}