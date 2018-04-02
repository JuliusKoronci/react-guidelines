import styled from '../../../theme/theme';

export const Table = styled.table`
  margin: 10px auto;
`;

export const TableCell = styled.td`
  text-align: center;
  padding: 10px;
`;

export const TableCellLeft = TableCell.extend`
  text-align: left;
`;

export const TableHead = TableCell.withComponent('th').extend`
  border-bottom: 1px solid darkgrey;
`;
export const TableHeadLeft = TableHead.withComponent('th').extend`
 text-align: left;
`;
