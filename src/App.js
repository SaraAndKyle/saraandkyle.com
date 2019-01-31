import React, { Component } from 'react';
import styled from "styled-components";

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

const BusinessCard = styled.section`
  text-align: center;
`

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
`
  
const SubHeading = styled.h2`
  font-weight: 100;
  line-height: 6rem;
  margin: 0;
  text-transform: uppercase;
  transform: translateY(-8rem);
  word-spacing: 100vw;
`

const Action = styled.a`
  background-color: #333;
  color: #fff;
  display: inline-block;
  font-weight: 700;
  opacity: 0.8;
  padding: 0.4rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.4s;

  &:hover {
    opacity: 1;
  }
`

const And = props => <div {...props}>and</div>

const StyledAnd = styled(And)`
  background-color: rgba(0, 126, 163, 1);
  color: #fff;
  display: inline-block;
  font-size: 1.5rem;
  line-height: 4rem;
  margin: auto;
  vertical-align: top;
  width: 4rem;
`

const HiddenAnd = styled(And)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <BusinessCard>
          <Heading>Sara <StyledAnd/> Kyle</Heading>
          <SubHeading>Design <HiddenAnd/> Development</SubHeading>
          <Action href="mailto:sara@saraandkyle.com">Contact Us</Action>
        </BusinessCard>
      </AppContainer>
    );
  }
}

export default App;