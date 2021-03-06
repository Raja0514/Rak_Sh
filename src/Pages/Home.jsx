import React from "react";
import AllPizza from "../pizza-data";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../Components/Pizza";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          {AllPizza.map((pizza) => {
            return(
                <>
                
                <Col md={4}>
                <Pizza pizza={pizza} />
              </Col>
              </>
            )
            
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
