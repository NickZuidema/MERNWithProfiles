import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";

const ListItem = () => {
  const navigate = useNavigate();
  const [title, SetTitle] = useState("");
  const [price, SetPrice] = useState("");
  const [description, SetDescription] = useState("");
  const [category, SetCategory] = useState("");
  const [image, SetImage] = useState("");
  const [imageUrl, SetImageUrl] = useState("");
  useEffect(() => {
    if (imageUrl) {
      fetch("/createitem", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + localStorage.getItem("jwt").replace(/["]+/g, ""),
        },
        body: JSON.stringify({
          title,
          price,
          description,
          category,
          image: imageUrl,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html: data.error, classes: "#c62828 red darken-3" }); //Toast for not filling in all the fields
          } else {
            M.toast({ html: "Item Listed successfully!" });
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [imageUrl]);

  const itemDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "MERN-images");
    data.append("cloud_name", "didsnj3aq");
    fetch("https://api.cloudinary.com/v1_1/didsnj3aq/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        SetImageUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="price"
        value={price}
        onChange={(e) => SetPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="category"
        value={category}
        onChange={(e) => SetCategory(e.target.value)}
      />
      <div className="file-field input-field">
        <div className="file-field input-field">
          <div className="btn waves-effect waves-light black">
            <span>Upload Image</span>
            <input type="file" onChange={(e) => SetImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
      </div>
      <button
        className="btn waves-effect waves-light black"
        onClick={() => itemDetails()}
      >
        List Item!
      </button>
    </div>
  );
};

export default ListItem;
