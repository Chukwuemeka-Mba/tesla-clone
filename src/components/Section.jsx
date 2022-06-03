import styled from "styled-components";
function Section() {
  return (
    <SectionWrapper>
      <div>Section Wrapper</div>
    </SectionWrapper>
  );
}

export default Section;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url("./model3.png");
`;
