import { ReactTicker } from "@guna81/react-ticker";
// import "./styles.css";

export default function News_Tricker() {
  const data = [
    {
      id: 1,
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const renderItem = (item) => {
    return (
      <p
        style={{
          whiteSpace: "nowrap",
          color: "orange",
        }}
      >
        {item.value}
      </p>
    );
  };

  return (
    <div className="App">
      {/* using default ticker item component */}
      <div>
        <ReactTicker
          data={data.map((item) => item.value)}
          component={renderItem}
          speed={20}
          keyName="_id"
          tickerStyle={{
            position: "fixed",

            bottom: 0,
            left: "0",
            width: "100%",
            height: "40px",
            backgroundColor: "#fff",
            zIndex: 99,
            borderTop: "1px solid #e0e0e0",
            border: "red",
          }}
          tickerClassName="news-ticker"
        />
      </div>

      
    </div>
  );
}
