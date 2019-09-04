import React from "react";

export default function AddTodoForm() {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s11">
            <input id="add_todo" type="text" className="validate" />
            <label htmlFor="add_todo">Todo</label>
          </div>
          <div className="col s1">
            <button
              type="submit"
              className="btn-floating btn-large waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
