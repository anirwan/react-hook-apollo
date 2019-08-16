import React from 'react';
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { addAuthorMutation, getAuthorsQuery } from '../queries/queries'
import useForm from '../hooks/UseForm'

const AddAuthor = props => {

    const addAuthor = () => {
        props.addAuthorMutation({
            variables : {
                name: inputs.name,
                age: parseInt(inputs.age)
            }, 
            refetchQueries: [
                { query: getAuthorsQuery }
            ]
        })
    }

    const { inputs, handleInputChange, handleSubmit } = useForm(addAuthor)

    return (
        <div>
            <h3>Add new Author</h3>
            <form id="add-author" onSubmit={ handleSubmit }>
                <div className="field">
                    <label>Author name:</label>
                    <input type="text" name="name" onChange={ handleInputChange } value={ inputs.name } />
                </div>
                <div className="field">
                    <label>Author age:</label>
                    <input type="number" name="age" onChange={ handleInputChange } value={ inputs.age }/>
                </div>
                <button>+</button>
            </form>
        </div>
    )
}

export default compose(
    graphql(addAuthorMutation, { name: "addAuthorMutation" })
)(AddAuthor);