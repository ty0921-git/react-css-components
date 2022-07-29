/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 1px #c2185b;
    border-radius: 0.3rem;
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
  `;
  const titleStyle = css({
    color: "#C2185B"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <Button>FIGHT</Button>
    </div>
  );
};

const Button = styled.button`
  background-color: #c2185b;
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d81b60;
  }
`;
