import Sidebar from "./Sidebar";
import useFetch from "./FetchData";
import Card from "../Component/Card";
import SmallCard from "../Component/SmallCard";

const Food = () => {
  const url = "https://blog-api-fiwd.onrender.com/api/food";
  const [data] = useFetch(url);
  return (
    <div className="main">
      <h1>Food</h1>
      <div className="main__container">
        <div className="rightbar">
          {data
            .filter((article) => {
              return article.category === "Food";
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
  );
};
export default Food;
