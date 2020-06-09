import React, { Component } from "react";
import axios from "axios";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { BookList, ListItem } from "../components/BookList";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
    state = {
        books: [],
        query: "",
        result: {}
    };

    bookSearch = () => {

        let API_URL = `https://www.googleapis.com/books/v1/volumes`;

        const fetchBooks = async () => {
            // Ajax call to API using Axios
            const result = await axios.get(`${API_URL}?q=${this.state.query}`);
            // Books result
            console.log(result.data);
            this.setState({ books: result.data.items });

        }

        // Submit handler
        const onSubmitHandler = (e) => {
            // Prevent browser refreshing after form submission
            e.preventDefault();
            // Call fetch books async function
            fetchBooks();
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log("Query", this.state.query);
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div>
                            <Jumbotron>
                                <h1>Google Books Search</h1>
                                <h1>Search for and save your favorite books</h1>
                            </Jumbotron>
                            <form>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                    placeholder="Title (required)"
                                />
                                <FormBtn
                                    disabled={!(this.state.title)}
                                    onClick={this.bookSearch}
                                >
                                    Search
              </FormBtn>
                            </form>



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
                                            </div>
                                        )
                                    }
                                    )}
                                </BookList>
                                :
                                <h2>No books to display</h2>
                            }
                        </div>
                    </Col>

                </Row>
            </Container>
        );
    };
}

export default Search;
