import styled from "styled-components";
import React from "react";

export default props => (
  <Wrapper>
    CompA
    <CompA {...props} />
    <CompC data-testid="CompA-C" />
    <CompD data-testid="CompA-D" />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 40px;
`;

const CompA = styled.div`
  background: blue;
  width: 60px;
  height: 60px;
  color: #fff;
`;

const CompC = styled.div`
  width: 60px;
  height: 60px;
  color: #fff;
  background: skyblue;
`;
const CompD = styled.div`
  width: 60px;
  height: 60px;
  color: #fff;
  background: #20aee5;
`;
