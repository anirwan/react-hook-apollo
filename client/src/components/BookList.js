import React from 'react';
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails';
import useBookDetails from '../hooks/UseBookDetails';

const BookList = props => {

    const { selectedBook, handleBookSelect } = useBookDetails(props.selectedBook)

    const DisplayBooks = (props) => {
            
        if(props.data.loading) {
            return(
                <div>Loading Books...</div>
            )
        } else {
            return props.data.books.map(book => {
                return (
                    <li key={ book.id } onClick={ handleBookSelect } id={ book.id }>{ book.name }</li>
                )
            })
        }
    }

    return (
        <div>
            <ul id="book-list">
                { DisplayBooks(props) }
            </ul>
            <BookDetails selectedBook={ selectedBook }/>
        </div>
    );
}

export default graphql(getBooksQuery)(BookList);