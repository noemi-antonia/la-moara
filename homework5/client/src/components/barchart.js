const Barchart = ({ data, occurrence }) => {
  if (data.length === 0) return;

  return (
    <>
      <div style={{ gridTemplateColumns: occurrence }} className="barchart">
        {data.map((item, index) => (
          <div key={index} style={{ backgroundColor: item._color }}></div>
        ))}
      </div>
      <div style={{ alignSelf: "flex-start" }}>
        {data.map((item, index) => (
          <div key={index} className="label">
            <span style={{ backgroundColor: item._color }} className="color-box"></span>
            <p>{item._text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Barchart;
