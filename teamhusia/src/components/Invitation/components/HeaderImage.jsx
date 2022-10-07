import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 2em;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
`;

const HeaderImage = ({ src, alt }) => {
  return (
    <StyledDiv>
      <img src={src} alt={alt} width={300} height={300} />
    </StyledDiv>
  );
};

export default HeaderImage;
