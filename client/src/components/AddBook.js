import React from 'react';
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'
import useForm from '../hooks/UseForm'

const DisplayAuthors = props => {
    if(props.getAuthorsQuery.loading) {
        return(
            <option>Loading Authors...</option>
        )
    } else {
        return props.getAuthorsQuery.authors.map(author => {
            return (
                <option key={ author.id } value = { author.id }>{ author.name }</option>
            )
        })
    }
}

const AddBook = props => {

    const addBook = () => {
        props.addBookMutation({
            variables : {
                name: inputs.name,
                genre: inputs.genre,
                authorId: inputs.authorId
            }, 
            refetchQueries: [
                { query: getBooksQuery }
            ]
        })
    }

    const { inputs, handleInputChange, handleSubmit } = useForm(addBook)

    return (
        <div>
            <h3>Add New Book (Author must exist)</h3>
            <form id="add-book" onSubmit={ handleSubmit }>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" name="name" onChange={ handleInputChange } value={ inputs.name } />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" name="genre" onChange={ handleInputChange } value={ inputs.genre }/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select name="authorId" onChange={ handleInputChange } value={ inputs.authorId }>
                        <option>Select Author</option>
                        { DisplayAuthors(props) }
                    </select>
                </div>
                <button>+</button>
            </form>
        </div>
    )
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);