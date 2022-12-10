// import CardHome from "../Component/CardHome";
// import useFetch from "./FetchData";
const Footer = () => {
  // const url = "https://blog-api-fiwd.onrender.com/api/home";
  // const [data] = useFetch(url);
  return (
    <>
      <footer>
        {/* <div className="footer-container">
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
                  description={n.description.slice(0, 100)}
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
                  description={n.description.slice(0, 100)}
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
                  description={n.description.slice(0, 100)}
                  fulldescription={n.description}
                  author={n.author}
                />
              ))}
          </div>
        </div> */}
        <h4> &copy; shaileshTech 2022</h4>
      </footer>
    </>
  );
};

export default Footer;
