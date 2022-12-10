import Card from "../Component/Card";
import SmallCard from "../Component/SmallCard";
import Sidebar from "./Sidebar";
import useFetch from "./FetchData";
export const Technology = () => {
  const url = "https://blog-api-fiwd.onrender.com/api/technology";
  const [data] = useFetch(url);
  return (
    <div className="main">
      <h1>Technology</h1>
      <div className="main__container">
        <div className="rightbar">
          {data
            .filter((article) => {
              return article.category === "Technology";
            })
            .map((n) => (
              <div key={n.id}>
                <Card
                  articleid={n.id}
                  imgUrl={n.Image}
                  description={n.description.slice(0, 200)}
                  fulldescription={n.description}
                  title={n.title}
                />
              </div>
            ))}
        </div>
        <Sidebar data={data} SmallCard={SmallCard} />
      </div>
    </div>
  );
};

export default Technology;
