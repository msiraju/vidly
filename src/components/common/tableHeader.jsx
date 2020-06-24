import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (path === sortColumn.path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  renderSortIcon = (column) => {
    if (column.path !== this.props.sortColumn.path) return null;
    else
      return (
        <i
          className={
            this.props.sortColumn.order === "asc"
              ? "fa fa-sort-asc"
              : "fa fa-sort-desc"
          }
          aria-hidden="true"
        />
      );
  };
}

export default TableHeader;
