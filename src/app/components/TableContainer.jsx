/**
 * Created by leonardli on 3/24/17.
 */
import React, {Component, PropTypes} from 'react';
import {Table, Column} from 'fixed-data-table';
import {Header, Cell} from './CustomColumn';

class TableContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tableWidth: 0,
      sorting: {}
    };
  }

  componentDidMount() {
    this._handleWindowResize();
    window.addEventListener("resize", this._handleWindowResize);
  }

  _handleWindowResize = () => {
    if (this._handleResizeTimeout) {
      clearTimeout(this._handleResizeTimeout);
    }
    this._handleResizeTimeout = setTimeout(() => {
      this.setState({tableWidth: this._tableContainer.clientWidth});
    }, 200)
  };

  handleSortingChange = (columnId, order) => {
    this.setState({sorting: {columnId, order}});
  };

  render() {
    let rows = [
      {entityId: 'abc'},
      {entityId: 'bcd'}
    ];
    const columns = [{
      headerType: 'eid',
      id: 'entityId',
      header: 'sim Entity ID',
      cellType: 'eid'
    }];
    let {columnId, order} = this.state.sorting;
    if(this.state.sorting && this.state.sorting.columnId && this.state.sorting.order){
      rows = rows.sort((rowA, rowB)=> {
        let valueA = rowA[columnId].toString().toLowerCase();
        let valueB = rowB[columnId].toString().toLowerCase();
        console.log(valueA.localeCompare(valueB));
        return valueB.localeCompare(valueA);
      })
    }
    return (
      <div ref={ node => this._tableContainer = node}>
        <Table
          rowHeight={32}
          rowsCount={rows.length}
          width={this.state.tableWidth}
          height={(rows.length + 1) * 32 + 2}
          headerHeight={32}>
          {columns.map((col, index) => (
            <Column
              key={index}
              header={
                <Header
                  type={col.headerType}
                  data={col.header}
                  sorting{this.state.sorting}
                  onSortingChange={this.handleSortingChange}
                />
              }
              cell={({rowIndex}) => (<Cell type={col.cellType} data={rows[rowIndex][col.id]}/>)}
              width={300}
            />
          ))}
        </Table>
      </div>
    )
  }
}

export default TableContainer;