import React from "react";

const ListItem = () => {
  return (
    <div
      className="card input-field"
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input type="text" placeholder="title" />
      <input type="text" placeholder="price" />
      <input type="text" placeholder="description" />
      <input type="text" placeholder="category" />
      <div className="file-field input-field">
        <div className="file-field input-field">
          <div className="btn waves-effect waves-light black">
            <span>Upload Image</span>
            <input type="file" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
      </div>
      <button className="btn waves-effect waves-light black">List Item!</button>
    </div>
  );
};

export default ListItem;
