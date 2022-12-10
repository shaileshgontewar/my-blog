import Card from "../Component/Card";
import SmallCard from "../Component/SmallCard";
import Sidebar from "./Sidebar";
import useFetch from "./FetchData";
const Hollywood = () => {
  const url = "https://blog-api-fiwd.onrender.com/api/hollywood";
  const [data] = useFetch(url);
  return (
    <div className="main">
      <h1>Hollywood</h1>
      <div className="main__container">
        <div className="rightbar">
          {data
            .filter((article) => {
              return article.category === "Hollywood";
            })
            .map((n) => (
              <div key={n.id}>
                <Card
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  fulldescription={n.description}
                />
              </div>
            ))}
        </div>
        <Sidebar data={data} SmallCard={SmallCard} />
      </div>
    </div>
  );
};
export default Hollywood;
