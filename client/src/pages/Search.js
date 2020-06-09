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


        // const fetchBooks = async () => {
        // Ajax call to API using Axios
        axios.get(`${API_URL}?q=${this.state.query}`)
            // Books result
            // console.log(result.data);
            .then(res => {
                //console.log(res);
                this.displayRes(res.data);
            })
            .catch(err => console.log(err));
    };

    displayRes = data => {
        this.setState({ books: data.items });
    }



    // Submit handler
    // const onSubmitHandler = (e) => {
    //     // Prevent browser refreshing after form submission
    //     e.preventDefault();
    //     // Call fetch books async function
    //     fetchBooks();
    // }
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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
                            <input id="bookQ" className="form-control form-control-lg" autoComplete="off" type="text" name="query" onChange={this.handleInputChange} />
                            <button class="btn" type="submit" onClick={this.bookSearch} >
                                Search for Books
          </button>




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
