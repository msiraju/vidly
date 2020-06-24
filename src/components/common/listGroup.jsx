import React from "react";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    selectedItem,
    onItemSelect,
  } = props;
  return (
    <ul className="list-group">
      {items.map((i) => (
        <li
          style={{ cursor: "pointer" }}
          key={i[valueProperty]}
          className={
            selectedItem === i ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(i)}
        >
          {i[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
