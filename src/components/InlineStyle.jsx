export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 1px #C2185B",
    borderRadius: ".3rem",
    padding: ".5rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "1rem"
  };
  const titleStyle = {
    color: "#C2185B"
  };
  const buttonStyle = {
    backgroundColor: "#C2185B",
    padding: ".5rem 1rem",
    color: "#FFF",
    border: "none",
    borderRadius: "5px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT</button>
    </div>
  );
};
