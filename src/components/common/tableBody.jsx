import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(column, item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  createKey(item, column) {
    return item._id + (column.path || column.key);
  }

  renderCell(column, item) {
    return column.content ? column.content(item) : _.get(item, column.path);
  }
}

export default TableBody;
