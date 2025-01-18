import './Tricker.css';

const NewsContainer = () => {
  return (
    <div className="news-container">
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          color: "white",
          fontWeight: "bold",
          zIndex: "200",
        }}
      > Breaking News
      </div>
      <ul>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam!
        </li>
        <li>Lorem ipsum dolor sit</li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam!
        </li>
      </ul>
    </div>
  );
};

export default NewsContainer;
