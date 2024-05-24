// Could not proxy request /profile/6645e4ab20241ee3b4a361f6 from localhost:3000 to http://localhost:5000/.
// See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNREFUSED).

import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";

const Profile = () => {
  //   const [myitems, setitems] = useState([]);
  //   const [error, setError] = useState(null);
  //   const { state, dispatch } = useContext(UserContext);
  //   const { userid } = useParams();
  //   console.log(userid);

  // useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(`/profile/${userid}`, {
  //           headers: {
  //             authorization:
  //               "Bearer " + localStorage.getItem("jwt").replace(/["]+/g, ""),
  //           },
  //         });
  //         console.log(response);
  //         // if (!response.ok) {
  //         //   // If response status is not OK (e.g., 404, 500), throw an error
  //         //   throw new Error(`Error: ${response.status} ${response.statusText}`);
  //         // }
  //         console.log("Response OK!");
  //         const result = await response.json();
  //         console.log(result);
  //         setitems(result.items);
  //       } catch (err) {
  //         console.error("Fetch error:", err);
  //         setError(err.message);
  //       }
  //     };

  //     fetchData();
  //   }, [userid]);

  const [myitems, setitems] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const { userid } = useParams();
  console.log(userid);

  useEffect(() => {
    fetch(`/profile/${userid}`, {
      headers: {
        authorization:
          "Bearer " + localStorage.getItem("jwt").replace(/["]+/g, ""),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

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
          <h4>{state ? state.name : "loading..."}</h4>
          <h5>@{state ? state.username : "loading..."}</h5>
          <h6>No information given.</h6>
          <br></br>
          <div /*style={{ display: "flex" }}*/>
            {/*Commented style aligns contents horizontally*/}
            <h6>Artworks: 6</h6>
            <h6>Joined: May 17, 2024</h6>
          </div>
        </div>
      </div>

      <div className="gallery">
        {myitems.map((item) => {
          return (
            <img
              id={item._id}
              className="profile-item "
              src={item.image}
              alt={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
