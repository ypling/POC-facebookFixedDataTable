/**
 * Created by leonardli on 3/29/17.
 */

import React from 'react';
import {Cell as DefaultCell} from 'fixed-data-table';

export function Header(props) {
  switch(props.type) {
    case 'eid':
      return (<div>{props.data} <span onClick={props.onSortingChange.bind(this,'entityId','asc')}>filter</span></div>);
      break;
    default:
      return (<DefaultCell>{props.data}</DefaultCell>);
      break;
  }
}

export function Cell (props) {
  return <div>{props.data}</div>
}