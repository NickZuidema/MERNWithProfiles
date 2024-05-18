import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allitems", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt").replace(/["]+/g, ""), //prettier-ignore
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result && result.items) {
          setData(result.items);
        } else {
          console.error("Data structure is incorrect", result);
        }
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  //console.log(item);

  return (
    <div className="home">
      {/*console.log(data)*/}
      {data.map((item) => {
        return (
          <div className="card home-card" key={item._id}>
            <div className="card-image">
              <img src={item.image} />
            </div>
            <div className="card-content">
              <h5>
                {item.title} ({item.category})
              </h5>
              <h5>₱{item.price}</h5>
              <h6>by {item.artist.username}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
