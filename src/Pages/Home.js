import useFetch from "./FetchData";
import Card from "../Component/Card";
import SmallCard from "../Component/SmallCard";
import CardHome from "../Component/CardHome";
import HomeNews from "./homepage/HomeNews";
import Sidebar from "./Sidebar";
const Home = () => {
  const url = "https://blog-api-fiwd.onrender.com/api/home";
  const [data] = useFetch(url);
  return (
    <>
      <div className="Home">
        <HomeNews />
        <div className="middle">
          <h1>The Latest</h1>
          <hr />
          <div className="box">
            <div className="home__left">
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
            <div className="home__left">
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
            <div className="home__left">
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
        <div className="main">
          <h1>Latest Articles</h1>
          <div className="main__container">
            <div className="rightbar">
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
            <Sidebar data={data} SmallCard={SmallCard} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
