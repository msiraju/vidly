import React, { Component } from "react";

// name
// type
// value
// onChange
class Input extends Component {
  render() {
    const { label, name, error, ...rest } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input {...rest} name={name} id={name} className="form-control" />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;
