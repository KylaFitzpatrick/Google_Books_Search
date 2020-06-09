// import React from "react";
import React, { Component } from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";

// This file exports both the List and ListItem components

export function BookList({ children }) {
  return (
    <div className="list-overflow-container">
    <ul className="list-group">{children}</ul>
  </div>
  );
}
export class ListItem extends React.Component{ 
  render(){
    return(
<li>
        <Container>
          <Row>
            <Col size="xs-8 sm-9">
              <h3>{this.props.title}<span><h5>{this.props.author}</h5></span></h3>
            </Col>
          </Row>
        </Container>
      </li>
    )
  }
}
