import styled from "styled-components";
import React from "react";

export default props => (
  <Wrapper>
    CompB
    <CompA {...props} />
    <CompC data-testid="CompB-C" />
    <CompD data-testid="CompB-D" />
  </Wrapper>
);
const Wrapper = styled.div`
  margin: 40px;
`;

const CompA = styled.div`
  background: red;
  width: 60px;
  height: 60px;
  color: #fff;
`;

const CompC = styled.div`
  width: 60px;
  height: 60px;
  color: #fff;
  background: tomato;
`;
const CompD = styled.div`
  width: 60px;
  height: 60px;
  color: #fff;
  background: #c42b2b;
`;
