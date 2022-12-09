import React, { useEffect, useState } from "react";
import Card from "../Component/Card";
import SmallCard from "../Component/SmallCard";
import CardHome from "../Component/CardHome";
import HomeNews from "./homepage/HomeNews";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://blog-api-fiwd.onrender.com/api/home";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <div className="Home">
        <HomeNews />
        <div className="middle1">
          <h1>The Latest</h1>
          <hr />
          <div className="box">
            <div className="home__left left1">
              {data
                .filter((article) => {
                  return article.category === "bollywood";
                })
                .map((n) => (
                  <div key={n.id}>
                    <CardHome
                      articleid={n.id}
                      imgUrl={n.Image}
                      title={n.title}
                      description={n.description.slice(0, 200)}
                      fulldescription={n.description}
                      author={n.author}
                    />
                  </div>
                ))}
            </div>
            <div className="home__left left1">
              {data
                .filter((article) => {
                  return article.category === "technology";
                })
                .map((n) => (
                  <div key={n.id}>
                    <CardHome
                      articleid={n.id}
                      imgUrl={n.Image}
                      title={n.title}
                      description={n.description.slice(0, 200)}
                      fulldescription={n.description}
                      author={n.author}
                    />
                  </div>
                ))}
            </div>
            <div className="home__left left1">
              {data
                .filter((article) => {
                  return article.category === "food";
                })
                .map((n) => (
                  <div key={n.id}>
                    <CardHome
                      articleid={n.id}
                      imgUrl={n.Image}
                      title={n.title}
                      description={n.description.slice(0, 200)}
                      fulldescription={n.description}
                      author={n.author}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="box2">
          <h1>Latest Articles</h1>
          <h1 className="Top">Top Posts</h1>
          <hr />
          <div className="box2-container">
            <div className="rightbar2">
              {data
                .filter((article) => {
                  return article.category === "mix";
                })
                .map((n) => (
                  <div key={n.id}>
                    <Card
                      articleid={n.id}
                      imgUrl={n.Image}
                      title={n.title}
                      description={n.description.slice(0, 200)}
                      fulldescription={n.description}
                      author={n.author}
                    />
                  </div>
                ))}
            </div>
            <div className="sidebar2">
              {data
                .filter((article) => {
                  return article.category === "mix";
                })
                .map((n) => (
                  <div key={n.id}>
                    <SmallCard
                      articleid={n.id}
                      imgUrl={n.Image}
                      description={n.description.slice(0, 200)}
                      fulldescription={n.description}
                      title={n.title.slice(0, 35)}
                      author={n.author}
                    />
                  </div>
                ))}

              <div className="advertisement">
                <p>Advertisement</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="box3">
          <h1 style={{ marginTop: "40px", display: "inline-block" }}>
            Latest Stories
          </h1>
          <hr />

          <div className="home__left">
            {data
              .filter((article) => {
                return article.category === "footer1";
              })
              .map((n) => (
                <CardHome
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  fulldescription={n.description}
                  author={n.author}
                />
              ))}
          </div>

          <div className="home__left">
            {data
              .filter((article) => {
                return article.category === "footer2";
              })
              .map((n) => (
                <CardHome
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  fulldescription={n.description}
                  author={n.author}
                />
              ))}
          </div>

          <div className="home__left">
            {data
              .filter((article) => {
                return article.category === "footer3";
              })
              .map((n) => (
                <CardHome
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  fulldescription={n.description}
                  author={n.author}
                />
              ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
