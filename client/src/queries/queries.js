import { gql } from 'apollo-boost'

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`
const getBookQuery = gql`
    query ($id: ID!) {
        book (id:$id) {
            id
            name
            genre
            author {
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const addBookMutation = gql`
    mutation ($name: String!, $genre: String!, $authorId: ID!) {
        addBook (name: $name genre: $genre authorId: $authorId) {
            id
            name
        }
    }
`

const addAuthorMutation = gql`
    mutation ($name: String!, $age: Int!) {
        addAuthor (name: $name age: $age) {
            id
            name
        }
    }
`

export {
    getBooksQuery,
    getBookQuery,
    getAuthorsQuery,
    addBookMutation,
    addAuthorMutation
}