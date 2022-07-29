export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 1px #c2185b;
          border-radius: 0.3rem;
          padding: 0.5rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 1rem;
        }

        .title {
          color: #c2185b;
        }

        .button {
          background-color: #c2185b;
          padding: 0.5rem 1rem;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
