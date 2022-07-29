import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>- Styled Components -</Title>
      <Button>FIGHT</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 1px #c2185b;
  border-radius: 0.3rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.p`
  color: #c2185b;
`;

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
