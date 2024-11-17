import { useState } from "react";
import Tags from "./tags.json";
import Tag from "./tag";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  h3 {
    color: var(--cinza);
    font-weight: 700;
    font-size: 20px;
  }
`;

const CategoriaTags = () => {
  const [tags, setTags] = useState(Tags);
  return (
    <Container>
      <h3>Você pode estar procurando por estas categorias:</h3>
      <StyledUl>
        {tags.map((tag) => (
          <Tag
            key={tag.value}
            tagName={tag.categoria}
            onClick={() =>
              setTags((tagPrev) =>
                tagPrev.filter((e) => e.categoria !== tag.categoria)
              )
            }
          />
        ))}
      </StyledUl>
    </Container>
  );
};

export default CategoriaTags;
