import React from 'react'
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

const DisplayBookDetails = props => {
    if(props.data.loading) {
        return (
            <p>Loading book details...</p>
        )
    } else {
        if(props.data.book) {
            const otherBooks = props.data.book.author.books.filter(book => book.id !== props.selectedBook)
            return (
                    <p> 
                        Genre: {props.data.book.genre} <br />
                        Name: {props.data.book.author.name} <br />
                        Age: {props.data.book.author.age} <br />
                        Other Books: {otherBooks.length > 0 ? otherBooks.map(book => book.name).join(", ") : "N/A"}
                    </p>
            )
        } else {
            return (
                <p>Click a book for a brief summary</p>
            )
        }
    }
}

const BookDetails = props => {
    return (
        <div id="book-details">
            <h3>Book Details</h3>
            { DisplayBookDetails(props) }
        </div>
    )
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.selectedBook
            }
        }
    }
})(BookDetails)