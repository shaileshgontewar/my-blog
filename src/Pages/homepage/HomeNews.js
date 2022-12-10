import React from "react";
import { Link } from "react-router-dom";

const HomeNews = () => {
  return (
    <>
      <div className="home__container">
        <div className="home__first">
          <h1>Kerala:Gods Own Country</h1>
        </div>
        <div className="home__sec">
          <Link to="/fitness">
            <img
              src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="not foun"
            />
          </Link>
        </div>
        <div className="home__thir">
          <Link to="/technology">
            <img
              src="https://media.istockphoto.com/photos/shot-of-a-young-man-using-his-digital-tablet-and-computer-in-a-modern-picture-id1344688192?b=1&k=20&m=1344688192&s=170667a&w=0&h=vvCGfVelYwrPia3dh2yH9rBSur2O9mD_kw2R-lbBIDw="
              alt="not found"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeNews;
