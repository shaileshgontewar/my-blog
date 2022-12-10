const Sidebar = (props) => {
  const { data, SmallCard } = props;
  return (
    <>
      <div className="sidebar">
        <h4 className="top">Top Posts</h4>
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
                title={n.title.slice(0, 45)}
                author={n.author}
              />
            </div>
          ))}

        <div className="advertisement">
          <p>Advertisement</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
