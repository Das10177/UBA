import { ReactTicker } from "@guna81/react-ticker";


export default function App() {
  const data = [
    {
      id: 1,
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 1,
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 1,
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 1,
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
      <ReactTicker
        data={data.map((item) => item.value)}
        speed={20}
        keyName="_id"
        tickerStyle={{
          position: "fixed",
          top: 0,
          left: "0",
          width: "100%",
          height: "40px",
          backgroundColor: "#fff",
          zIndex: 99,
          borderTop: "1px solid #e0e0e0",
        }}
        tickerClassName="news-ticker"
      />

      <h1 style={{ textAlign: "center" }}>React Ticker Examble</h1>

      {/* using custom ticker item component */}
      <ReactTicker
        data={data}
        component={renderItem}
        speed={40}
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
        }}
        tickerClassName="news-ticker"
      />
    </div>
  );
}
