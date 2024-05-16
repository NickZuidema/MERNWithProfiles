import React from "react";

const Profile = () => {
  return (
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1591116697400-884dbaf33ef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1hbmlsYXxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
        <div>
          <h4>John "The Bike" Ronalds</h4>
          <h5>@iamthebike</h5>
          <h6>Are there bikes nearby?</h6>
          <br></br>
          <div /*style={{ display: "flex" }}*/>
            {/*Commented style aligns contents horizontally*/}
            <h6>Artworks: 6</h6>
            <h6>Joined: May 17, 2024</h6>
          </div>
        </div>
      </div>

      <div className="gallery">
        <img
          className="profile-item "
          src="https://images.unsplash.com/photo-1591116697400-884dbaf33ef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1hbmlsYXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <img
          className="profile-item "
          src="https://images.unsplash.com/photo-1591116697400-884dbaf33ef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1hbmlsYXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <img
          className="profile-item "
          src="https://images.unsplash.com/photo-1591116697400-884dbaf33ef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1hbmlsYXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <img
          className="profile-item "
          src="https://images.unsplash.com/photo-1591116697400-884dbaf33ef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1hbmlsYXxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Profile;
