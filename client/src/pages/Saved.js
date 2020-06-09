import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { BookList, ListItem } from "../components/BookList"
class Saved extends Component {
    state = {
        savedBooks: []
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                <h1>Google Books Saved</h1>
                                <h1>Search for and save your favorite books</h1>
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12 sm-12">
                        {(this.state.books && this.state.books.length > 0) ?
                            <BookList>
                                {this.state.books.map(book => {
                                    return (
                                        <div>
                                            <ListItem
                                                key={book.id}
                                                title={book.volumeInfo.title}
                                                author={book.volumeInfo.author}
                                                description={book.volumeInfo.description}
                                                image={book.volumeInfo.thumbnail}
                                                link={book.volumeInfo.Link}
                                            />
                                            <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                        </div>

                                    )
                                }
                                )}
                            </BookList>
                            :
                            <h2>No books to display</h2>
                        }


                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Saved;
