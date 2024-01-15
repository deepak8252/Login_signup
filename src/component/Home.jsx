import React from 'react'
// import banner from '../image/banner1.jpeg'
import styled from 'styled-components'
import Login from './Login';
const Container=styled.div`
    width: 100%;
    display: flex;
    flex-basis: 2;
    flex-direction: column;
    /* background: green; */
`;
const Row=styled.div`
    
`;

const Home = () => {
  return (
    <>
      <h2>hello world</h2>
      <Container>
        <Row>

       <Login/>
        </Row>

      </Container>
     
    </>
  )
}

export default Home
