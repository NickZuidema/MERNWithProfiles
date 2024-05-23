import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";

const Profile = () => {
  const [data, setData] = useState([]);
  const [myitems, setitems] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("/myitems", {
      headers: {
        authorization:
          "Bearer " + localStorage.getItem("jwt").replace(/["]+/g, ""),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setitems(result.myitems);
      });
  }, []);

  // const deleteItem = (itemid) => {
  //   fetch(`/deleteitem/${itemid}`, {
  //     method: "delete",
  //     headers: {
  //       authorization:
  //         "Bearer " + localStorage.getItem("jwt").replace(/["]+/g, ""),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       const newData = data.filter((item) => {
  //         return item._id !== result._id;
  //       });
  //       setData(newData);
  //     });
  // };

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

//       <div className="gallery">
//         {myitems.map((item) => {
//           return (
//             {/*<div className="profile-card">*/}
//               <img
//                 id={item._id}
//                 className="profile-item "
//                 src={item.image}
//                 alt={item.title}
//               />
//               {item.artist._id == state._id && (
//                 <i
//                   className="material-icons delete-icon"
//                   onClick={deleteItem(item._id)}
//                 >
//                   delete
//                 </i>
//               )}
//             {/*</div>*/}
//           );
//         })}
//       </div>
//     </div>
//   );
// };
