/**
 * Created by leonardli on 3/29/17.
 */
import {Column, Cell} from 'fixed-data-table';
export default function EidColumn(props){
  return (
    <Column
      header={<Cell>sim Entity ID</Cell>}
      cell={({rowIndex}) => (<Cell>Column 1 content: {props.rows[rowIndex].display}</Cell>)}
      width={300}
    />
  )
}