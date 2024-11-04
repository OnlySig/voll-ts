import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main `
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 1440px) {
    padding: 0 120px;
  }
`;

const LayoutPages = () => {
  return (
    <Container>
      <Outlet/>
    </Container>
  );
};

export default LayoutPages;